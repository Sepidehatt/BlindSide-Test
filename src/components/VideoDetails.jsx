import ReactPlayer from 'react-player/vimeo';
import videos from './../videos.json'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './Comments';
import VideoCard from './VideoCard';

const Container = styled.div`
display: flex;
flex-direction:column;
  gap: 24px;
  height:100vh;

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

const Related = styled.div`
  flex: 3;
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
border: 1px solid white;
 margin: 30px 0;
 padding: 10px;
width:60%;
display: flex;
  justify-content: space-between;
& > div{
  display: flex;
align-items: center;
gap:20px;

}
`

const ProfileImage = styled.img`
  width:40px;
 border-radius:50%;
`
const DetailWrapper = styled.div`
width: 75%;
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
const SubscribeBtn = styled.button`

`;

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
            <InfoWrapper>
            <div>
              <ProfileImage src="https://robohash.org/quomaximeiste.jpg?size=70x70&set=set1" />
              <Title>Username</Title>
            </div>
            <SubscribeBtn>Subscribe</SubscribeBtn>
          </InfoWrapper>
          </DetailWrapper>
          <Comments/>
        </Content>
        <Related>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        </Related>
      </TopPart>
      <BottomPart>

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