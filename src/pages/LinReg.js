const studyHrs = [2,3,5,4,6,2,8]
const marks = [23,45,43,67,83,9,96]

const x = studyHrs
const y = marks

const meanx = x.reduce((sum, val) => sum+val, 0) / x.length;
const meany = y.reduce((sum, val) => sum+val, 0) / y.length;

console.log(meanx, meany)

import { useEffect, useState } from 'react';
// import Plot from "react-plotly.js";

function ExamScorePrediction() {
    const [regressionLine, setRegressionLine] = useState([]);
    const [regressionParams, setRegressionParams] = useState({b0: 0, b1: 0});
    // const [inputX, setInputX] = useState("");
    const [predictedScore, setPredictedScore] = useState(null);

  
    // useEffect(() => {
    //   if (inputX === "") {
    //     setPredictedScore(null);
    //   } else if (parseFloat(inputX) >= 0) {
    //     const score = regressionParams.b0 + regressionParams.b1 * parseFloat(inputX);
    //     setPredictedScore(score <= 100 ? score.toFixed(2) : 100);
    //   }
    // }, [inputX, regressionParams]);
  
    useEffect(() => {
      trainModel();
    }, []);
  
    useEffect(() => {
      if (regressionParams.b0 > 0 && regressionParams.b1 > 0) {
        // Model Testing
        const predictionsFromInputs = x.map((x) => regressionParams.b0 + regressionParams.b1 * x);
        const residuals = predictionsFromInputs.map((y, i) => y[i] - y);
  
        const ssResiduals = residuals.reduce((sum, residual) => sum + Math.pow(residual, 2), 0);
        const ssTotal = y.reduce((sum, score) => sum + Math.pow(score - meany, 2), 0);
  
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
      const numerator = x.reduce((sum, xi, i) => sum + (xi - meanx) * (y[i] - meany), 0);
      const denominator = x.reduce((sum, xi) => sum + Math.pow(xi - meanx, 2) ,0);
      const b1 = numerator / denominator;
      const b0 = meany - b1 * meanx;
  

      const regressionYs = x.map(xi => b0 + b1 * xi);
      setRegressionLine(regressionYs);
      setRegressionParams({b0, b1});
    }
  
  
    
    return (
      <div>
        <div style={{textAlign: "center"}}>
          <div>
            <h4>Trained on </h4>
            <label>X</label>
            <input
            type="text"
            value={x}
            label="X"
            placeholder="X"/>
            <br/>
            <label>Y</label>
            <input
            type="text"
            value={y}
            label="Y"
            placeholder="Y"/>
          </div>
          <div>
            <h4>Parameters</h4>
            b0: {regressionParams.b0} b1: {regressionParams.b1}
            </div>
            <div>
                <h4>Scores</h4>
                {/* MAE: {mae}
                MSE: {mse} */}
            </div>
        </div>
        
      </div>
    );


    // return (
    //   <div>
    //     <div style={{textAlign: "center"}}>
    //       <input
    //         type="number"
    //         value={inputX}
    //         onChange={(e) => {
    //           setinputX(e.target.value);
    //         }}
    //         placeholder="Enter study hours"
    //         style={{marginBottom: 10}}
    //       />
    //       { predictedScore &&
    //         <div>
    //           Predicted exam score: {predictedScore}
    //         </div>
    //       }
    //       <div>b0: {regressionParams.b0}</div>
    //       <div>b1: {regressionParams.b1}</div>
    //     </div>
    //     <Plot
    //       style={{width: "100%", height: 500}}
    //       data={data}
    //       layout={layout}
    //     />
    //   </div>
    // );
  
}  
  export default ExamScorePrediction;
  