import styled from "styled-components"
import { NavLink } from 'react-router-dom';


const Container = styled.div`
width: 350px;
  margin-bottom: 30px;
  display: ${({ type }) => type === "related" && "flex"};
`;

const Image = styled.img`
margin-left: 10px;
  width:40px;
 border-radius:50%;
`
const Video = styled.img`
height: ${({ type }) => type === "popular" ? "200px" : "150px"};
  width: ${({ type }) => type === "popular" ? "200px" : "280px"};
  border-radius: ${({ type }) => type === "popular" ? "10px" : "4px"};
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
 width: ${({ type }) => type === "popular" ? "120px" : "210px"};
color:white;
margin: 0;
`
const VideoText = styled.p`
display: ${({ type }) => type === "related" ? "flex" : "none"};
margin: 0;
color:darkgray;
`


const VideoCard = ({ videoDet, type }) => {
  return (
    <>
      {
        videoDet &&

        <NavLink to={`/videos/${videoDet.id}`} style={{ textDecoration: "none" }}>
          <Container type={type}>
            <Video src={videoDet.imageUrl} type={type} />
            <DescriptionWrapper>
              <Image src={videoDet.profileImage} />
              <Description>
                <VideoTitle type={type} >{videoDet.title}</VideoTitle>
                <VideoText type={type} >Lorem ipsum, dolor sit amet consectetur adipisicing.</VideoText>
              </Description>
            </DescriptionWrapper>
          </Container>
        </NavLink>
      }
    </>
  )
}

export default VideoCard