import Poster from "./Poster";

export default function Login(){
    return (<>
        <Poster />
        <div class="container-sm login-container">
          <h2>Login</h2>
          {/* <label class="text-danger"><i class="bi bi-info-circle"></i> if_Error</label> */}
          <form>
            <div class="m-3">
              <label for="usernmae" class="form-label">Username</label>
              <input type="username" class="form-control" id="username" />
            </div>
            <div class="m-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </>)
  }