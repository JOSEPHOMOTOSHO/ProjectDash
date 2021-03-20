import Leftside from "../Leftside/Leftside";
import Rightside from "../Rightside/Rightside";
import Signupform from "../Signupform/Signupform";

const SignupSection = () => {
  return (
    <div className="flex-div">
      <Leftside text="Don't Have an account?" />
      <Rightside
        title="Sign Up"
        text="Welcome back! Please login to your account."
        footer="Already have an account?"
        link="Login"
        linkpath="/LoginSection"
      >
        <Signupform />
      </Rightside>
    </div>
  );
};

export default SignupSection;
