import styled from "styled-components"
import profileImagePH from './../assets/profileImagePH.png'

const Container = styled.div`
margin-top: 0;
padding-top: 0;
 background-color: #000;
  color: white;
  
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
`;

const SignInBtn = styled.button`

`;

const Image = styled.img`
  width:40px;
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
  return (
    <Container>
      <ItemWrapper>
        <Input type="search" placeholder="Search.." />
        <RightSide>
          <SignInBtn>Sign in</SignInBtn>
          <Image src={profileImagePH} />
        </RightSide>

      </ItemWrapper>

    </Container>
  )
}

export default Navbar