import { useState } from "react";
import "./ReviewForm.css";
import FileInput from "./FileInput";

function ReviewForm() {
  // 리액트에서 인풋과 스테이 값을 일치시키는 것이 핵심 포인트이다.
  // const [title, setTitle] = useState(); // 제목
  // const [rating, setRating] = useState(); // 점수
  // const [content, setContent] = useState(); // 리뷰 내용

  // 이 이벤트 핸들러에서는 input의 value가 변경될 때마다 그 값을 state에 반영
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleRatingChange = (e) => {
  //   // Rating은 숫자니까 여기서 형변환 해줘야한다.
  //   const nextRating = Number(e.target.value) || 0;
  //   setRating(nextRating);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  // 하나의 State로 입력값 관리하기
  const [values, setValues] = useState({
    title: "",
    rating: 0,
    content: "",
    imgFile: null,
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 제어 컴포넌트로 인풋 태그에서 이벤트 발생시 변화를
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    // 네트워크 연동은 나중에
    e.preventDefault();
    console.log({
      // title,
      // rating,
      // content,
      values,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input value={title} onChange={handleTitleChange}></input>
      <input type="number" value={rating} onChange={handleRatingChange}></input>
      <textarea value={content} onChange={handleContentChange}></textarea> */}
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      ></input>
      <input
        name="rating"
        type="number"
        value={values.rating}
        onChange={handleInputChange}
      ></input>
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      ></textarea>
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
