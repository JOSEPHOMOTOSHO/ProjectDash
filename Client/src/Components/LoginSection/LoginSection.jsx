import Leftside from "../Leftside/Leftside";
import Rightside from "../Rightside/Rightside";
import Loginform from "../Loginform/Loginform";

export default function LoginSection() {
  return (
    <div className="flex-div">
      <Leftside text="Welcome back!" />
      <Rightside
        title="Login"
        text="Welcome back! Please login to your account."
        footer="New User?"
        link="Sign Up"
        linkpath="/SignUpSection"
      >
        <Loginform />
      </Rightside>
    </div>
  );
}
