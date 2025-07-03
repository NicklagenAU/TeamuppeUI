import LoginForm from "../components/LoginForm";
import { useUser } from "../context/UserContext";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (email: string, password: string) => {
    try {
      const loggedInUser = await login(email, password);
      setUser(loggedInUser);
      navigate("/dashboard");
    } catch {
      // error handled by hook
    }
  };

  return (
    <LoginForm
      onSubmit={handleLogin}
      loading={isLoading}
      error={error ? error : null}
    />
  );
};

export default LoginPage;
