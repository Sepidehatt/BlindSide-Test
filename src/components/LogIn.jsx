import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  
`;


const SubTitle = styled.h2`
  font-size: 20px;
  color: #af7b0c;

  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  border-radius: 20px;
  padding: 30px 80px;
  gap: 10px;
`;

const Input = styled.input`
border:none;
 border-bottom: 1px solid gray;
 outline:none;
  border-radius: 20px;
  padding: 10px;
  color:white;
  background-color: transparent;
  width: 100%;
  margin-bottom: 20px;
`;

const LoginBtn = styled.button`
  border-radius: 3px;
  border: 1px solid #af7b0c;
  color: #af7b0c;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  background-color:transparent;

  :hover{
    background-color: #af7b0c;
    color:white;
  }


`;

const Title = styled.h1`
font-size: 24px;
`;



const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    //if username or password field is empty, return error message
    if (email === "" || password === "") {
      setErrorMessage((prevState) => ({
        value: "Email/password field is empty",
      }));

    } else if(email && password ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      navigate('/')
    } 
  };



  return (
    <Container>
        <Title>Sign In</Title>
        <SubTitle>Welcome Here</SubTitle>
        {errorMessage && <p>{errorMessage}</p>}
        <Form onSubmit={handleLoginSubmit}>
              <Input
                placeholder="Email ..."
                type="email"
                name="email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Password ..."
                type="password"
                name="password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
          <LoginBtn type="submit">Sign in</LoginBtn>
        </Form>
    </Container>
  )
}

export default LogIn