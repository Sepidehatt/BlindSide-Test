
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import VideoDetails from './components/VideoDetails';
import Navbar from './components/Navbar';
import SideBarMenu from './components/SideBarMenu';


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
            <Route path='/video/test' element={<VideoDetails />} />
          </Routes>
        </VideoWrapper>
      </Main>
    </Container>
  );
}

export default App;
