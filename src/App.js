
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import VideoDetails from './components/VideoDetails';
import Navbar from './components/Navbar';
import SideBarMenu from './components/SideBarMenu';
import VideoList from './components/VideoList';


const Container = styled.div`
  display:flex;
`;
const Main = styled.div`
flex: 7;
`;
const VideoWrapper = styled.div``;


function App() {

  return (
    <Container >
      <SideBarMenu />
      <Main>
        <Navbar />
        <VideoWrapper>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/videos' element={<VideoList />} />
            <Route path='/videos/:videoId' element={<VideoDetails />} />
          </Routes>
        </VideoWrapper>
      </Main>
    </Container>
  );
}

export default App;
