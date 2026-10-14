import PostsList from "./features/posts/PostsList.jsx";
import {useState} from "react";
import CommentsList from "./features/posts/CommentsList.jsx";
import AddPostForm from "./features/posts/AddPostForm.jsx";

function App() {
  const [postId, setPostId] = useState('')

  const handleOpenComments = (id) => {
    setPostId(id)
  }
  return (
    <>
      <div className="flex">
        <div>
          <PostsList onOpenComments={handleOpenComments}/>
          <CommentsList postId={postId}/>
        </div>
        <div>
          <h1>Добавить пост</h1>
          <AddPostForm />
        </div>

      </div>
    </>
  )
}

export default App
