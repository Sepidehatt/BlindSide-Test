import styled from "styled-components"
import profileImagePH from './../assets/profileImagePH.png'
import { NavLink } from 'react-router-dom';


const Container = styled.div`
width: 350px;
  margin-bottom: 30px;
`;


const Image = styled.img`
margin-left: 10px;
  width:40px;
 border-radius:50%;
`
const Video = styled.img`
height: 200px;
  width: 200px;
  border-radius: 10px;
object-fit:cover;

`
const DescriptionWrapper = styled.div`
display: flex;
align-items: start;
margin-top: 15px;
gap : 13px ;
`
const Description = styled.div`
display: flex;
flex-direction:column;


`;


const VideoTitle = styled.h5`
line-height:20px;
 width: 120px;
color:white;
margin: 0;
`
// const VideoText = styled.p`
// margin: 0;
// color:lightgray;
// `


const VideoCard = () => {
  return (
    <NavLink to="/video/test" style={{textDecoration : "none"}}>
      <Container>
        <Video src="https://i.vimeocdn.com/video/692518526-d30920bc6f18a385ef1b886552d00f6158e66a32ba904f1e4156a4f67cd3c0d4-d_590x332" />
        <DescriptionWrapper>
          <Image src={profileImagePH} />
          <Description>
            <VideoTitle>Video Title</VideoTitle>
            {/* <VideoText>Lorem ipsum, dolor sit amet consectetur adipisicing.</VideoText> */}
          </Description>
        </DescriptionWrapper>
      </Container>
    </NavLink>
  )
}

export default VideoCard