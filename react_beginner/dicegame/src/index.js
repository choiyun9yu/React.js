import ReactDOM from 'react-dom/client';
import App from './App';

// JSX로 작성한 코드가 나타날 위치 설정
const root = ReactDOM.createRoot(document.getElementById('root'));

// 1. JSX에서 JS 사용하기 
    //중괄호로 감싸주면 된다. if문이나 for문 함수 선언 등은 안됨, 표현식만 가능
// const product = 'MacBook';
// const model = 'Pro';
// const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';
// const handleClick = function (e) {
//     alert('곧 도착합니다!');
// }
// const element = (
//     <>
//         <h1>{product + ' ' + model} 주문하기</h1>
//         <img src={imageUrl} alt="제품 사진" />
//         <button onClick={handleClick}>확인</button>
//     </>
// );


// 2. 컴포넌트
    // 함수의 첫글자를 대문자로 써야한다.
    // JSX문법으로 만든 리액트 엘리먼트를 리턴해야 한다.
    // 재사용에 유리하다.
    // 이 객체는 리액트 엘리먼트라고 한다. 이것을 ReactDOM의 render 메소드로 전달하면 리액트가 이 객체를 해석해서 HTML로 렌더링 하는 것이다.
    // 리액트 엘리먼트를 함수 형태로 만들어내면 JSX 문법을 작성할 때 커스텀 태그처럼 활용할 수도 있다.
// const Hello = () => <h1>안녕 리액트</h1>;   // 이 함수를 리액트 컴포넌트라고 한다.
// const element = (
//     <>
//         <Hello />   // 컴포넌트 태그 형태
//         <Hello />
//         <Hello />
//     </>  
// );


// 3. Props : 컴포넌트에 지정한 속성 (리액트 개발자도구 컴포넌트 탭에서 확인 가능)
    // 컴포넌트에 지정한 프롭은 객체 형태로 컴포넌트 함수의 첫번째 파라미터로 전달
    // 3-1. childern
        // JSX 문법으로 컴포넌트를 작성할 때 여는 태그와 닫는 태그의 형태로 작성하면, 그 안에 작성된 코드가 바로 이 children 값에 담기게 된다.
        // 리엑트에 기본적으로 존재하는 프롭, 컴포넌트의 자식들을 값으로 값는 프롭
        // 컴포넌트 함수에서 따로 가공하지 않고, 단순히 보여주기만 할 모습은 children Prop로 표현


// 4. State : 리액트에서 변수같은 것, state를 바꾸면 리액트가 알아서 화면을 새로 렌더링 한다.
    // import { useState } from "react"; 로 모듈 삽입
    // useState 함수는 파라미터로 초기값을 전달받고,
    // 배열의 형태로 요수 2개를 반환한다.
        // 첫번째 요소는 State 값 (현재 변수의 값)
        // 두번째 요소는 setter 함수 (이 함수를 호출할 때 파라미터로 전달하는 값으로 State값 변경)

root.render(<App />);