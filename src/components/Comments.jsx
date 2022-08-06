import styled from "styled-components";
import { useState } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import InputEmoji from 'react-input-emoji';


const Container = styled.div`
background-color:black;
width: 80%;
`;
const Hr = styled.hr`
opacity:0.4;
  margin: 25px 2px;
`

const CommenteBtn = styled.button`

`;
const CommentForm = styled.form`
   .InputEmoji{
border-color:red;
    width: 20%;
  }
`;

const FormWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
`;


const CommentCounter = styled.span`
  cursor:pointer;
`;
const Comment = styled.div`
`;

const CommentsWrapper = styled.div`
`;



const Comments = () => {
  const [showComment, setShowComment] = useState(false)




  const showCommentBar = () => {
    return setShowComment(!showComment)
  }


  return (
    <Container>
      <HeaderWrapper>
        <CommentCounter onClick={showCommentBar} >0 Comments</CommentCounter>
        <ModeCommentIcon style={{ cursor: "pointer" }} onClick={showCommentBar} htmlColor='CadetBlue' />
      </HeaderWrapper>

      {showComment
        &&
        <>
          <FormWrapper>
            <CommentForm>
              <InputEmoji
                name="text"
                value="text"
                placeholder='write a comment..'
                className="InputEmoji"
              />
            </CommentForm>
            <CommenteBtn>Comment</CommenteBtn>
          </FormWrapper>

          <CommentsWrapper>
            <Comment>Hello</Comment>
            <Hr/>
            <Comment>Hello</Comment>
            <Hr/> 
            <Comment>Hello</Comment>
            <Hr/> 
            <Comment>Hello</Comment>
            <Hr/>
          </CommentsWrapper>
        </>
      }
    </Container>
  )
}

export default Comments;