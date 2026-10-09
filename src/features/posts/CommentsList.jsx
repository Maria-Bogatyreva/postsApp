import {useGetCommentsByIdQuery} from "../../app/apiSlice.js";

export default function CommentsList({postId}) {
  const {currentData: comments, error, isFetching, isUninitialized} = useGetCommentsByIdQuery(postId, {skip: !postId})

  if (isUninitialized) return null;
  if (isFetching) return <p>Загрузка комментариев...</p>
  if (error) return <i>Ошибка загрузки данных</i>
  return (
    <>
      <h2>Комметарии к посту - {postId}</h2>
      {
        comments.map(comment => (
          <div key={comment.id}>
            <b>{comment.name}</b>
            <br/>
            <i>{comment.body}</i>
          </div>
        ))
      }
    </>
  )
}
