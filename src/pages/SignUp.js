import Poster from "./Poster";

export default function SignUp() {
  return (
    <>
      <Poster />
      <div class="container-sm SignUp-container">
        <h2>SignUp</h2>
        {/* <label class="text-danger"><i class="bi bi-info-circle"></i> if_Error</label> */}
        <form>
          <div class="m-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="m-3">
            <label for="usernmae" class="form-label">
              Username
            </label>
            <input type="username" class="form-control" id="username" />
          </div>
          <div class="m-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="m-3">
            <label for="confpassword" class="form-label">
              Confirm Password
            </label>
            <input type="password" class="form-control" id="confpassword" />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
