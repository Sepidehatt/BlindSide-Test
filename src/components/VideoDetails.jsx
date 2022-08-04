import ReactPlayer from 'react-player/vimeo';
import videos from './../videos.json'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';


const Container = styled.div`
display: flex;
flex-direction:column;
  gap: 24px;
  height:100vh;
  background-color: #000;
  color: white;
`;

const TopPart = styled.div`
display: flex;
  `
const BottomPart = styled.div`
 
  `

const VideoWrapper = styled.div`
 margin: 30px 0;
 width: 60%;
`

const Content = styled.div`
  flex: 5;
  `

const Comment = styled.div`
  flex: 2;
`
const VideoTitle = styled.h2`
color:white;
margin: 0;
`
const Title = styled(VideoTitle)`
font-size:0.8rem;
`

const VideoText = styled.p`
margin: 0;
color:lightgray;
`
const InfoWrapper = styled.div`
display: flex;
align-items: center;
gap:20px;
`

const ProfileImage = styled.img`
  width:40px;
 border-radius:50%;
`
const DetailWrapper = styled.div`
width: 60%;
display: flex;
flex-direction:column;
& > div{
  display: flex;
  justify-content: space-between;

}

`

const IconBtnDiv = styled.div`
display: flex;
`
const IconBtn = styled.div`
`

const VideoDetails = () => {
  const { videoId } = useParams()
  const videoDetail = videos.find(video => videoId === video.id)
  return (
    <Container>
      <TopPart>
        <Content>
          <VideoWrapper>
            <ReactPlayer controls url="https://vimeo.com/321921012" />
          </VideoWrapper>
            <DetailWrapper>
              <div>
                <VideoTitle>Video Title</VideoTitle>
                <IconBtnDiv>
                  <IconBtn>
                    <FavoriteIcon />
                  </IconBtn>
                  <IconBtn>
                    <ShareIcon />
                  </IconBtn>
                </IconBtnDiv>
              </div>
              <VideoText>Lorem ipsum, dolor sit amet consectetur adipisicing.</VideoText>
            </DetailWrapper>
        </Content>
        <Comment>
        <InfoWrapper>
        <ProfileImage src="https://robohash.org/quomaximeiste.jpg?size=70x70&set=set1" />
        <Title>Username</Title>
        </InfoWrapper>
        </Comment>
      </TopPart>
      <BottomPart>bottom here
      </BottomPart>
    </Container>
  )
}

export default VideoDetails

/*
{videoDetail &&
        <>
          <ReactPlayer controls url={videoDetail.videoUrl} />
          <h3>{videoDetail.title}</h3>
          <img src={videoDetail.profileImage} alt={videoDetail.creator} />
          <span>{videoDetail.creator}</span>
        </>
      }
*/ 