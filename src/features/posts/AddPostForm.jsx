import {useState} from "react";
import {useCreatePostMutation} from "../../store/api/postsApi.js";

const initialValues = {
  title: "",
  body: ""
}

export default function AddPostForm() {
  const [formData, setFormData] = useState(initialValues);
  const [addPost, {isLoading, error}] = useCreatePostMutation();

  function handleChangeForm(key, value) {
    setFormData(prev => (
      {
        ...prev,
        [key]: value
      }
    ))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(formData).every(value => value.trim().length > 0)) {
      try {
        await addPost(formData).unwrap();
        setFormData(initialValues)
      } catch(error) {
        console.error(error)
      }
    }
    else {
      alert('Заполните поля!')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formData.title} onChange={(e) => handleChangeForm('title', e.target.value)} name="title" placeholder="title"/>
        <br/>
        <textarea value={formData.body} name="body" onChange={(e) => handleChangeForm('body', e.target.value)} placeholder="body"/>
        <br/>
        <button type="submit">Добавить пост</button>
      </form>
      {!!error && <p>Не удалось отправить пост</p>}
      {!!isLoading && <p>Загрузка...</p>}
    </>
  )
}
