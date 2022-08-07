import videos from './../videos.json';
import styled from "styled-components"
import VideoCard from './VideoCard';
import { useState } from 'react'



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
 border-radius: 3px;
 margin-left: 10px;
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




const VideoList = () => {
  const [filterByTag, setFilterByTag] = useState(videos)

  const tags = videos.map(video => video.tag)
  const tagsName = [...tags].filter((tag, i) => tag !== tags[i - 1]).sort((a, b) => a.localeCompare(b))

  const filterVideos = (tag) => {
    if (tag) return setFilterByTag(preValue => {
      return videos.filter(video => video.tag === tag)
    })
    else return setFilterByTag(videos)
  }


  return (
    <Container>
      <BtnWrapper>
        <FilterBtn onClick={() => filterVideos()} >All</FilterBtn>
        {tagsName &&
          tagsName.map(tag => <FilterBtn onClick={() => filterVideos(tag)}>{tag}</FilterBtn>)
        }
      </BtnWrapper>
      <VideoWrapper>
        {filterByTag?.map(video => <VideoCard videoDet={video} />)}
      </VideoWrapper>
    </Container>
  )
}

export default VideoList