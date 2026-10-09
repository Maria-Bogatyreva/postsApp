import PostsList from "./features/posts/PostsList.jsx";
import {useState} from "react";
import CommentsList from "./features/posts/CommentsList.jsx";

function App() {
  const [postId, setPostId] = useState('')

  const handleOpenComments = (id) => {
    setPostId(id)
  }
  return (
    <>
      <h1>Список постов</h1>
      <PostsList onOpenComments={handleOpenComments}/>
      <CommentsList postId={postId}/>
    </>
  )
}

export default App
