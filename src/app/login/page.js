"use client";
import Illustration from "@/components/Illustration";
import LoginForm from "@/components/LoginForm";
import PublicRoute from "@/hoc/PublicRoute";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
};
export default PublicRoute(Login);
