import styled from "styled-components"
import profileImagePH from './../assets/profileImagePH.png'
import { NavLink, useNavigate } from 'react-router-dom';


const Container = styled.div`
margin-top: 0;
padding-top: 0;

`;

const ItemWrapper = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
padding: 10px 40px;
`;

const RightSide = styled.div`
display: flex;
align-items: center;

a{
  text-decoration: none;
  margin-right: 15px;
  border-radius: 3px;
  border: 1px solid #af7b0c;
  color: #af7b0c;
  padding: 5px 15px;
  font-weight: 600;
  cursor: pointer;
  background-color:transparent;

  :hover{
    background-color: #af7b0c;
    color:white;
  }
}
`;

const LogOutBtn = styled.button`
margin-right: 15px;
  border-radius: 3px;
  border: 1px solid #af7b0c;
  color: #af7b0c;
  padding: 7px 15px;
  font-weight: 600;
  cursor: pointer;
  background-color:transparent;

  :hover{
    background-color: #af7b0c;
    color:white;
  }
`;

const Image = styled.img`
  width:35px;
  border-radius:50%;
`
const Input = styled.input`
width: 400px;
border-radius:25px;
background-color:transparent;
color:white;
padding: 5px 20px;
`;



const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated")

  const logOutUser = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin")
  }


  return (
    <Container>
      <ItemWrapper>
        <Input type="search" placeholder="Search.." />
        <RightSide>
          {isAuthenticated !== "true"
            ? <NavLink to="/signin" >Sign in</NavLink>
            : <>
              <LogOutBtn onClick={logOutUser}>Log out</LogOutBtn>
              <Image src={profileImagePH} />
            </>
          }


        </RightSide>

      </ItemWrapper>

    </Container>
  )
}

export default Navbar