import styled from "styled-components";
import BSLogo from "./../assets/Logo.svg"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import Home from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


const Container = styled.div`
  flex: 1.2;
  position: sticky;
  top:0;
  height:100vh;
  background-color: #000;
  color: white;
`

const ItemWrapper = styled.div`
  padding: 20px 25px;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap:30px;
  margin-bottom: 10px;
  padding:10px;

  :hover{
    
    background-color: #1f1e1e;
  }
`

const Image = styled.img`
  width:150px;
  margin-bottom: 30px;
`

const Hr = styled.hr`
opacity:0.4;
  margin: 25px 2px;
`


const SideBarMenu = () => {

 return (
    <Container>
      <ItemWrapper>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Image src={BSLogo} />
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <Home />
            Home
          </Item>
        </NavLink>
        <NavLink to="/videos" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <VideoLibraryIcon />
            Videos
          </Item>
        </NavLink>
        <Item>
          <ThumbUpIcon />
          Favorites
        </Item>
        <Item>
          <AddToQueueIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          SUBSCRIPTION LIST
        </Item>
        <Hr />
        <Item>
          FAVORITE VIDEOS
        </Item>
      </ItemWrapper>
    </Container>
  )
}

export default SideBarMenu