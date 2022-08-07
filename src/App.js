
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import LogIn from './components/LogIn';
import VideoDetails from './components/VideoDetails';
import Navbar from './components/Navbar';
import SideBarMenu from './components/SideBarMenu';
import VideoList from './components/VideoList';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';



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
            <Route path='/' element={<IsPrivate><HomePage /></IsPrivate>} />
            <Route path='/signin' element={<IsAnon><LogIn /></IsAnon>} />
            <Route path='/videos' element={<IsPrivate><VideoList /></IsPrivate>} />
            <Route path='/videos/:videoId' element={<IsPrivate><VideoDetails /></IsPrivate>} />
          </Routes>
        </VideoWrapper>
      </Main>
    </Container>
  );
}

export default App;
