import { NavLink } from 'react-router-dom';
import videos from './../videos.json';
import styled from "styled-components"
import VideoCard from './VideoCard';

const Container = styled.div`
display: flex;
flex-direction:column;
`
const Titles = styled.div`
display: flex;
justify-content:space-between;
align-items: center;

h3{
  color:white;
  margin-left: 100px;
}

a{
  text-decoration:none;
  color:white;
  font-size:20px;
  margin-right: calc(40% - 280px); 
    :hover{
    color: #af7b0c;
  }

}
`

const VideoContainer = styled.div`
  margin-top: 80px;
  position: absolute;
  height: 300px;
  width: 600px;
  top: 60px;
  left: calc(40% - 250px); 
  display: flex;
`;

const AllVideoWrapper = styled.div`
margin-top: 35%;
`

const VideoWrapper = styled.div`
display: flex;
flex-wrap:wrap;
margin-top: 30px;
margin-left: calc(40% - 400px); 

`

const PopularVideoWrapper = styled.div`
`

const Card = styled.div`
display: flex;
  height: 320px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;

  :not(:first-child) {
    margin-left: -50px;
}

:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}
`


const HomePage = () => {

const popularVideo = videos.filter((video)=> video.views >= 3500)


  return (
    <Container>
      <PopularVideoWrapper>
        <Titles>
          <h3>Most Popular Videos</h3>
        </Titles>
        <VideoContainer>
        {popularVideo?.map((video,i) =>{
          if(i<=5) {
            return(
          <Card className="card">
            <VideoCard type="popular" videoDet={video}/>
          </Card>
          )}
        })}
         

        </VideoContainer>
      </PopularVideoWrapper>

      <AllVideoWrapper>
        <Titles>
          <h3>All Videos</h3>
          <NavLink to="/videos">See All</NavLink>
        </Titles>
        <VideoWrapper>
        {
          videos.map(video=>{
            return(
          <VideoCard videoDet={video} />
            )
          })
        }
        </VideoWrapper>
      </AllVideoWrapper>
    </Container>
  )
}

export default HomePage

/*    {videos.map(video =>{
  return(
    <>
    <NavLink to={`/${video.id}`}>
    <img src={video.imageUrl} alt={video.title}/>
    <h3>{video.title}</h3>
    <div>
    <img src={video.profileImage} alt={video.creator} />
    <span>{video.creator}</span>
    </div>
    </NavLink>
    </>
  )
})}
*/