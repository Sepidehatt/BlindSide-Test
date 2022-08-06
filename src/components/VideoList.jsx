import { NavLink } from 'react-router-dom';
import videos from './../videos.json';
import styled from "styled-components"
import VideoCard from './VideoCard';



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
    color: gold;
  }

}
`

const VideoWrapper = styled.div`
display: flex;
flex-wrap:wrap;
margin-top: 30px;
margin-left: calc(40% - 370px); 

`

const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  display:flex;
  justify-content:start;
  margin-top: 40px;
  margin-left: 50px;
`;

const FilterBtn = styled.button`
margin-right: 10px;
padding: 8px 15px;
`;




const VideoList = () => {
  return (
    <Container>
    <BtnWrapper>
    <FilterBtn>Basketball</FilterBtn>
    <FilterBtn>Fitness</FilterBtn>
    <FilterBtn>Handball</FilterBtn>
    </BtnWrapper>
      <VideoWrapper>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </VideoWrapper>
    </Container>
  )
}

export default VideoList