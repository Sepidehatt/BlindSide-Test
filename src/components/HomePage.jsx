import { NavLink } from 'react-router-dom';
import videos from './../videos.json';
import styled from "styled-components"
import VideoCard from './VideoCard';


const Container = styled.div`
margin-top: 0;
padding-top: 0;
height: 100vh;
 background-color: #000;
  color: white;
  display: flex;
  justify-content:space-between;
  align-items: center;
  flex-wrap:wrap;
  
`;


const HomePage = () => {

  return (
    <Container>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
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