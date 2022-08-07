import styled from "styled-components";
import { useState } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import InputEmoji from 'react-input-emoji';


const Container = styled.div`
border:1px solid rgb(32, 32, 32);
margin:40px 0 100px 0;
background-color:black;
padding: 15px 0;
width: 80%;
`;
const Hr = styled.hr`
opacity:0.2;
  margin: 25px 0;
`

const CommenteBtn = styled.button`
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

const CommentForm = styled.form`
`;

const FormWrapper = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin: 20px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  cursor:pointer;
`;


const CommentCounter = styled.span`
  color:darkgray;
`;
const Comment = styled.div`
`;

const CommentsWrapper = styled.div`
margin: 30px;
`;



const Comments = () => {
  const [showComment, setShowComment] = useState(false)




  const showCommentBar = () => {
    return setShowComment(!showComment)
  }


  return (
    <Container>
      <HeaderWrapper onClick={showCommentBar}>
        <CommentCounter >2 Comments</CommentCounter>
        <ModeCommentIcon />
      </HeaderWrapper>
      {showComment &&
        <>
          <FormWrapper>
            <CommentForm style={{width:"80%"}}>
              <InputEmoji
              
                name="text"
                value="text"
                placeholder='write a comment..'
              />
            </CommentForm>
            <div>
            <CommenteBtn>Comment</CommenteBtn>
            </div>
          </FormWrapper>

          <CommentsWrapper>
            <Comment>Super useful video! 🤩💪</Comment>
            <Hr/>
            <Comment>Interesting! </Comment>
            <Hr/> 
          </CommentsWrapper>
        </>
      }
    </Container>
  )
}

export default Comments;