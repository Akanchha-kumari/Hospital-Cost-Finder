import { useEffect, useState } from "react";
import "./Login.css";
import Validation from "./Validtion";
import { Box, Button, Card, Input, Stack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaHospitalAlt } from "react-icons/fa"; 

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);
  const [showPassword, setShowPassword] = useState(false); 

  const navigate = useNavigate();
  
  async function fetchData() {
    let res = await fetch("http://localhost:5000/api/admins");
    let loginarr = await res.json();
    setData(loginarr);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const user = data.find((el) => el.email === values.email);

      if (user) {
        if (user.password === values.password) {
          navigate("/search");
        } else {
          alert("Wrong password");
        }
      } else {
        alert("Email is not registered, you can create a new account.");
      }
    }
  }

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }

  const handleRegisterNavigate = () => {
    navigate("/register");
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="outerBox">
      <Box className="login-container">
        <FaHospitalAlt className="hospital-logo" /> {}
        <Card className="login-box">
          <h2>LOGIN</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label>Email</label>
            <Input
              className="input-glow"
              type="email"
              focusBorderColor="darkblue"
              placeholder="Email"
              name="email"
              borderRadius="none"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label>Password</label>
            <InputGroup>
              <Input
                className="input-glow"
                type={showPassword ? "text" : "password"} 
                focusBorderColor="darkblue"
                placeholder="Password"
                borderRadius="none"
                value={values.password}
                name="password"
                onChange={handleChange}
              />
              <InputRightElement>
                <Button variant="ghost" onClick={handleTogglePassword} _focus={{ boxShadow: 'none' }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.password && <p className="error-text">{errors.password}</p>}

            <a href="#" className="forgot-password">Forget Password?</a>

            <Button
              className="btn-primary"
              colorScheme="facebook"
              size="md"
              variant="solid"
              type="submit"
            >
              LOG IN
            </Button>
          </form>

          <Stack spacing={4} mt={4}>
            <Button
              className="btn-register"
              colorScheme="green"
              size="md"
              variant="outline"
              onClick={handleRegisterNavigate}
            >
              Register
            </Button>
          </Stack>
        </Card>
      </Box>
    </div>
  );
};

export default Login;
