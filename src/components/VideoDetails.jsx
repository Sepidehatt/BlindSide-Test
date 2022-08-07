import ReactPlayer from 'react-player/vimeo';
import videos from './../videos.json'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './Comments';
import VideoCard from './VideoCard';
import { useState} from 'react';

const Container = styled.div`
display: flex;
flex-direction:column;
  gap: 24px;
`;

const TopPart = styled.div`
display: flex;
  `

const VideoWrapper = styled.div`
 margin: 30px 0;
 width: 60%;
`

const Content = styled.div`
  flex: 4.5;
  `

const Related = styled.div`
  flex: 3.5;
  margin: 40px;
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
margin-left: 10px;
cursor:pointer;
`
const SubscribeBtn = styled.button`
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

const VideoDetails = () => {
const [like, setLike] = useState('white')
const [isLiked, setIsLiked] = useState(true)

  const { videoId } = useParams()
  const videoDetail = videos.find(video => videoId === video.id)
  const relatedVideos = videos.filter(video => video.tag === videoDetail.tag && video.id !== videoDetail.id)

  const likeHandler = ()=>{
    setLike(isLiked ? "crimson" : "white");
    setIsLiked(!isLiked)
  }


  return (
    <Container>
      <TopPart>
        <Content>
          {videoDetail &&
            <>
              <VideoWrapper>
                <ReactPlayer controls url={videoDetail.videoUrl} />
              </VideoWrapper>
              <DetailWrapper>
                <div>
                  <VideoTitle>{videoDetail.title}</VideoTitle>
                  <IconBtnDiv>
                    <IconBtn>
                      <FavoriteIcon onClick={likeHandler} htmlColor={like} />
                    </IconBtn>
                    <IconBtn>
                      <ShareIcon />
                    </IconBtn>
                  </IconBtnDiv>
                </div>
                <VideoText>Lorem ipsum, dolor sit amet consectetur adipisicing.</VideoText>
                <InfoWrapper>
                  <div>
                    <ProfileImage src={videoDetail.profileImage} />
                    <Title>{videoDetail.creator}</Title>
                  </div>
                  <SubscribeBtn>Subscribe</SubscribeBtn>
                </InfoWrapper>
              </DetailWrapper>
            </>
          }
          <Comments />
        </Content>
        <Related>
          {relatedVideos &&
            relatedVideos.map(video => <VideoCard type="related" videoDet={video} />)
          }
        </Related>
      </TopPart>
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