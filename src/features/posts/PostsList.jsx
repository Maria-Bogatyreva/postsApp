import {useGetPostsQuery} from "../../app/apiSlice.js";
import {useSelector} from "react-redux";
import {selectPosts} from "./postsSlice.js";
export default function PostsList({onOpenComments}) {
  const {error, isLoading} = useGetPostsQuery();
  const posts = useSelector(selectPosts);

  if (isLoading) return <p>Загрузка</p>
  if (error) return <i>Ошибка загрузки данных</i>

  return (
    <>
      <h1>Список постов</h1>
      {
      posts.map(post => (
        <div key={post.id}>
          <strong>{post.id} - {post.title}</strong>
          <p>{post.body}</p>
          <button onClick={()=>onOpenComments(post.id)}>Открыть комментарии</button>
          <hr/>
        </div>
      ))
      }
    </>
  )
}
