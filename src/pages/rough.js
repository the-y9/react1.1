function ExamScorePrediction() {
    const [regressionLine, setRegressionLine] = useState([]);
    const [regressionParams, setRegressionParams] = useState({b0: 0, b1: 0});
    const [inputHours, setInputHours] = useState("");
    const [predictedScore, setPredictedScore] = useState(null);
  
    const data = [{
      x: studyHoursData,
      y: examScoresData,
      mode: "markers",
      type: "scatter",
      marker: { color: "blue" }
    }, {
      x: studyHoursData,
      y: regressionLine,
      mode: "lines",
      type: "scatter",
      name: "Regression Line",
      line: {color: "red"}
    }];
  
    const layout = {
      title: "Study hours vs Exam Scores",
      xaxis: {
        title: "Study hours",
        autorange: true,
      },
      yaxis: {
        title: "Exam scores",
        autorange: true,
      },
    }
  
    useEffect(() => {
      if (inputHours === "") {
        setPredictedScore(null);
      } else if (parseFloat(inputHours) >= 0) {
        const score = regressionParams.b0 + regressionParams.b1 * parseFloat(inputHours);
        setPredictedScore(score <= 100 ? score.toFixed(2) : 100);
      }
    }, [inputHours, regressionParams]);
  
    useEffect(() => {
      trainModel();
    }, []);
  
    useEffect(() => {
      if (regressionParams.b0 > 0 && regressionParams.b1 > 0) {
        // Model Testing
        const predictionsFromInputs = studyHoursData.map((x) => regressionParams.b0 + regressionParams.b1 * x);
        const residuals = predictionsFromInputs.map((y, i) => examScoresData[i] - y);
  
        const ssResiduals = residuals.reduce((sum, residual) => sum + Math.pow(residual, 2), 0);
        const ssTotal = examScoresData.reduce((sum, score) => sum + Math.pow(score - meanExamScores, 2), 0);
  
        const r2 = 1 - (ssResiduals / ssTotal);
        const mae = residuals.reduce((sum, residual) => sum + Math.abs(residual), 0) / residuals.length;
        const mse = residuals.reduce((sum, residual) => sum + Math.pow(residual, 2), 0) / residuals.length;
  
        console.log(mse);
        console.log(mae)
        console.log(r2);
      }
    }, [regressionParams]);
  
    const trainModel = () => {
      // Step 1 - Compute means
      // Step 2 - Compute Slope (B1, m)
      const numerator = studyHoursData.reduce((sum, hour, i) => sum + (hour - meanStudyHours) * (examScoresData[i] - meanExamScores), 0);
      const denominator = studyHoursData.reduce((sum, hour) => sum + Math.pow(hour - meanStudyHours, 2) ,0);
      const b1 = numerator / denominator;
      const b0 = meanExamScores - b1 * meanStudyHours;
  
      const regressionYs = studyHoursData.map(x => b0 + b1 * x);
      setRegressionLine(regressionYs);
      setRegressionParams({b0, b1});
    }
  
  
    return (
      <div>
        <div style={{textAlign: "center"}}>
          <input
            type="number"
            value={inputHours}
            onChange={(e) => {
              setInputHours(e.target.value);
            }}
            placeholder="Enter study hours"
            style={{marginBottom: 10}}
          />
          { predictedScore &&
            <div>
              Predicted exam score: {predictedScore}
            </div>
          }
          <div>b0: {regressionParams.b0}</div>
          <div>b1: {regressionParams.b1}</div>
        </div>
        <Plot
          style={{width: "100%", height: 500}}
          data={data}
          layout={layout}
        />
      </div>
    );
  }
  
  export default ExamScorePrediction;
  