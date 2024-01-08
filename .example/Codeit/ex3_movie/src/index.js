import ReactDOM from "react-dom/client";
import App from "./components/App";

// 1. 배열 렌더링하기
// 1-1. map() : 많은 데이터 렌더링하기
//      map 메소드는 요소마다  콜백함수를 실행한 결과로 새로운 배열을 만드는 함수
//      많은 데이터를 보여줄 때 유용
//      map 메소드 안에서 JSX를 리턴하면, JSX를 여러개 추가한 것 처럼 동작

//      !주의 리스트의 각 child(map 메소드에서 렌더링한 것)는 고유한 key를 가져야한다.
//      요소들의 순서가 바뀌면 엉뚱한 위치에 렌더링 될 수 있기 때문이다.
//      이를 방지하기 위해 map 메소드로 렌더링할 때 최상위 태그에 key prop을 지정해주면 된다.
//      이때 key값은 변하지 않는 데이터의 고유한 값이어야한다.

// 1-2. sort() : 정렬기능
//      상위 컴포넌트에서 정렬할 객체의 컴포넌트로 정렬해서 prop을 내려주면 된다.
//      내림차순 정렬 .sort((a,b) => b - a )
//      오름차순 정렬 .sort((a,b) => a - b )

// 1-3. filter() : 삭제기능
//      filter 메소드는 요소마다 콜백 함수를 실행해서 리턴 값이 true인 요소만 걸러내는 함수
//      필터는 에로우 펑션의 조건식이 true인 것만 반환해준다.

// 2. 데이터 가져오기 : (실습서버) https://learn.codeit.kr/9820
//      Network탭의 Preview탭의 paging프로퍼티 : 데이터 추가 로딩에 쓸 값을 담고 있다.
//      Network탭의 Preview탭의 reviews프로퍼티 : 받아서 사용할 데이터
//      api.js 파일 : request 함수들을 모아두고 사용할 파일

// 2-1-1. useEffect() : 초기 데이터 가져오기
//      useEffect를 사용하면 처음 렌더링하고 난 다음에 비동기로 콜백 함수가 실행되고
//      그 다음 렌더링 때부터는 디펜던시 리스트의 값이 바뀔 때만 콜백 함수가 실행된다.
//      컴포넌트가 처음 렌더링 되었을때 또는 특정 값이 바뀌었을 때만 리퀘스트를 보내고 싶고, 무한루프는 피하고 싶을 때 사용
//      useEffect()를 사용하지 않고 그냥 함수를 호출하면 무한루프에 빠질 수 있다.
//      useEffect(비동기로 실행할 콜백함수, 디펜던시 리스트 빈배열[])
//      useEffect를 사용하면 콜백함수를 예약해뒀다가 렌더링이 끝나면 실행해준다. 이때 디펜던시 리스트도 같이 기억해둔다.
//      콜백함수를 실행하면 State가 변경되니까 다시 렌더링이 시작된다. 이때 useEffect도 다시 실행하는데
//      이때 디펜던시 리스트에 있는 값들을 앞에서 기억한 값이랑 비교하고 값이 다른 경우에만 콜백을 실행
//      이렇게 하면 콜백함수를 맨처음 렌더링할 때만 호출한다.
//      처음 진입시에만 하려면 useEffect 두번째 아규먼트를 [] 빈배열
//      특정 값이 바뀔 때도 하려면 useEffect 두번째 아규먼트를 [기억할 값 배열]

// 2-1-2. 서버에서 정렬한 데이터 받아오기
//      전체 데이터에서 정렬하는 게 아니라 받아온 데이터안에서만 정렬하는 문제가 있을 때
//      웹 브라우저에서 정렬하는 것이 아니라 서버에서 정렬된 데이터를 받아와야한다.

// 2-2. 페이지네이션(Pagination) : 렌더링에 필요한 만큼만 데이터를 받아오고 추가 데이터는 더보기 버튼이나 필요할 때 받아오는 것, 책의 페이지 처럼 데이터를 나눠서 제공하는 것
//      오프셋 기반 페이지네이션 : 오프셋;상쇄하다;지금까지 받아온 데이터 개수,
//                                 지금 n개 까지 받았으니 m개 더 보내줘
//                                 이미 받아온 데이터가 추가되거나 삭제되면 데이터를 받아오는데 중복이나 누락이 발생한다.
//                                 그러나 서버에 부담이 적다. 데이터가 자주 안바뀔 때 유리
//

//      커서 기반 페이지네이션 : 커서;특정데이터를 가리키는 값;지금 까지 받은 데이터를 표시한 책갈피
//                               다음 받아올 데이터의 커서값을 함께 전달해준다.
//                               데이터의 중복이나 누락없이 가져올 수 있다.
//                               그러나 서버에 부담이 있다. 데이터가 자주 바뀔 때 유리

// 조건부 렌더링 : 논리 연산자와 JSX 사용해서 조건부 렌더링
//                 and는 전건이 참이면 후건을 출력하고, 전건이 거짓이면 전건을 출력하는 특성 이용
//                 or는 전건이 참이면 전건을 출력하고, 전건이 거짓이면 후건을 출력하는 특성을 이용
//                 삼항 연산자는 참일 경우와 거짓일 경우를 다르게 표현
//                      {toggle ? <p>✅</p> : <p>❎</p>} 이런 느낌

// !주의 비동기로 State를 변경할 때
//      비동기로 State의 값을 변경할 때 잘못된 시점의 값을 사용하는 문제가 있음.
//      비동기 함수가 fulfiled되기 전에 다른 기능이 State를 변경 하면,
//      비동기 함수 내부에서는 인지하지 못하기 때문이다.
//      이럴 땐 setter 함수의 값이 아니라 콜백을 전달해서 해결할 수 있다.
//      이때 콜백함수의 파라미터는 고정된 것이 아니다.
//      따라서 콜백함수가 호출되는 시점의 State값을 전달받는다.

// 2-3. 네트워크 로딩 처리하기
//      네트워크가 로딩중인 경우 다른 작업을 하지 못하도록 처리
//      현재 네트워크가 리퀘스트중이면 true, 아니면 false값을 갖는 State로 작업 가능
//      try catch finally 문으로 리퀘스트를 try로 감싸고 시작할때 true값 설정, finally에서 false로 설정
//      try문 결과를 블록 밖으로 가져올 수 있는 더 넓은 스코프의 변수가 선언 필요!

// 2-4. 네트워크 오류 처리하기
//      마찬가지로 오류를 감지하는 State를 하나 만들고
//      시작할 때 false 값을 주다가 오류 감지하면 catch문에서 state에 erro 객체를 할당한다.
//      그리고 state에 오류 객체가 잡히면 오류 처리 하면 된다.

// 2-5. 검색기능
//      search 쿼리(api마다 다름)에 해당하는 %EB%A7%88%ED%86%A0 이런 값은 인코딩 된 한글이다.
//      fetch() 함수에서는 한글을 그대로 쓰면 알아서 인코딩해서 보내준다.
//      useEffect의 디펜던시 리스트에 search를 추구하는 것을 잊지말자!!
//      (1) 검색어 받기
//          e.preventDefault(); a태그, submit 태그로 인해 이동하거나 새로고침 되는 것을 막음
//      (2) 리퀘스트 보내기
//      (3) 리스폰스 적용하기
//      (4) '더보기' 버튼은?

// 3. 입력 폼 다루기
//      3-1. onChange : 리액트에서는 인풋의 값을 주로 state로 관리한다. 두 값을 동일하게 만드는게 핵심이다. <- 제어 컴포넌트
//      HTML에서는 사용자가 input에 입력할 때마다 onInput이라는 이벤트 발생, onChange 이벤트는 사용자 입력이 끝났을 때 발생
//      react에서 onChange는 HTML과 다르게 동작한다. -> onInput처럼 사용자가 값을 입력할 때마다 이벤트 발생

//      3-2. onSubmit : input 태그에 입력했으면 이제 전송도 할 수 있어야 한다.
//      type="submit"으로 지정한 버튼 태그를 클릭하면 form 태그에서 onSubmit 이벤트가 발생한다.
//      form 태그에는 onSubmit prop으로 handleSubmit을 내려준다.
//      HTML 폼 태그의 기본 동작은 입력 버튼을 눌렀을 때 입력 폼 내용을 GET 리퀘스트 보내는 것
//      그래서 기본 동작을 막아줘야한다. (e.preventDefault())

//      3-3. 하나의 State로 폼 구현하기
//      input {태그의 name 속성을 활용하는 것이 핵심이다. (이벤트 객체에서 name 값을 가져올 수 있다는 점을 활용)
//            -예시-
//            const { name, value } = e.target;
//            setValues((prevValues) => ({
//              ...prevValues,
//              [name]: value, // 대괄호 표기법으로 name의 값으로 key 설정, value로 value 설정
//             }));

//      3-4. 지우기 버튼 (인풋은 제어, 파일은 비제어 권장)
//          제어 컴포넌트 : 리액트를 통해 input 값을 지정하고 제어 (사용자가 소문자로 입력해도 이벤트 핸들러와 value 값으로 대문자로 바꿀 수 있음)
//              - 지우기 버튼 예제 -
//              import { useState } from "react";
//              function MyComponent({ value, onChange }) {
//                  const [value, setValue] = useState("");
//                  return <input value={value} />;
//              }
//              function App() {
//                  const [value, setValue] = useState("");
//                  // 지우기 함수
//                  const handleClear = () => setValue("");
//                  return (
//                      // onChange에 곧바로 setValue 할당함에 주의
//                      <div>
//                          <MyComponent value={value} onChange={setValue} />
//                          <button onClick={handleClear}>지우기</button>
//                      </div>
//                  );
//              }

//      3-5. 파일 인풋 : 반드시 비제어 인풋으로 만들어야 한다.
//          비제어 컴포넌트 : value prop을 지정하지 않는 컴포넌트 -> 사용자가 input이 리액트에서 실제 이용하는 값과 다를지라도 입력한 그대로 보임
//              파일은 여러개 선택할 수 있으니까 유사배열 형태이다.
//              유사배열에 담긴 객체를 사용하면 네트워크로 파일을 전송하거나 이미지 미리보기를 만들 수 있다.

//      3-6. ref로 DOM 노드 가져오기
//          ref : 원하는 시점에 실제 DOM 노드에 접근하고 싶을 때 사용할 수 있는 prop
//          (1) ref 객체 만들기 const inputRef = useRef();
//          (2) ref 라는 prop으로 내려주기 ref={inputRef}
//              ref prop으로 속성을 넣어두면 나중에 이 태그 선택할 수 있다.
//          (3) useEffect 함수를 써서 처음 렌더링 됬을 때만 inputRef를 콘솔로 출력
//          (4) ref를 쓰면 실제 DOM 노드를 직접 참조할 수 있다.
//          !주의 DOM 노드는 렌더링이 끝나야 생김, ref 객체의 current 값도 화면에 컴포넌트가 렌더링 됐을 때만 존재
//                조건부 렌더링으로 컴포넌트가 사라지거나 하는 경우에는 이값이 없을 수 있다.
//                그래서 항상 inputRef.curruent 값이 존재하는지 조건문으로 확인하고 사용하는 것 추천
//                ref의 current 속성은 DOM 엘리먼트 객체를 가리킨다

//      3-7. 파일 인풋 초기화
//              FileInput의 value 속성은 사용자만 직접 바꿀 수 있고 JS는 빈문자열로만 바꿀 수 있다.
//              value 속성을 빈 문자열로 바꿔주면 선택한 파일이 초기화 된다.
//              value prop으로 값을 수정할 수 없으니까 refDOM을 사용한다.

//      3-8. 이미지 파일 미리보기
//          파일객체를 ObjectURL로 만들면 파일에 댛나 주소를 만들 수 있다. 사용자 컴퓨터에 있는 파일을 주소로 사용할 수 있다.
//          ObjectURL 생성 함수 URL.createObjectURL(value);

//      3-9. Side Effect : 컴포넌트 함수에서 외부의 상태를 바꾸는 것 / ObjectURL은 만들 때마다 웹 브라우저의 메모리를 할당한다.
//          그런데 파일을 선택할 때마다 메모리를 할당 하기만 하면 메모리가 낭비된다.
//          다른 파일을 선택하거나 파일 선택을 해제했을 때 메모리도 같이 해제해 줘야 한다.
//          이때 사용하는 함수가 revokeObjectURL이라는 함수다.
//          useEffect 함수는 side effect를 만들고 나서 정리하는 방법도 제공한다.
//          useEfeect 에서 리턴 값으로 함수를 리턴하면 된다.
//          useEffect의 리턴은 다시 콜백할 때 그전 콜백의 리턴 값을 실행한다.

// 4. 데이터 보내기
//      4-1. 글 작성하기 : onSubmit 함수 - 리뷰생성API 연동(실습에서 연동하는 API는 FormData형식 )
//          api.js에 post방식으로 소통하는 패치함수를 만든다.
//          함수 안에는 api서버에서 전달받는 형식의 객체 데이터를 담아서 전달한다.
//          handleSubmit()함수에 formData 객체를 생성하는 코드도 작생해준다.
//          formData안에 필드는 서버에 보낼 데이터키와 밸류다.

//      4-2. submit하고 받은 response 데이터 반영하기
//          api에 따라 submit이 성공하면 성공한 데이터를 response해준다. 이것을 활용하면 새로고침없이 반영할 수 있다.
//          화면에 나오는 목록은 관리하는 State에 submit하고 받은 response를 items에 추가해주면
//          별도로 request를 하지 않아도 리뷰 목록 업데이트 가능

//      4-3. 글 수정하기
//          4-3-1. 수정 버튼을 눌렀을 때 입력 폼을 보여주기
//          핵심: ReveiwList 컴포넌트에서 현재 수정 중인 요소 기억 -> 렌더링할 때 해당요소만 랜더링하는 것
//          수정도 formData 객체를 만드는데 수정할 필드만 append해서 보낸다.
//          method는 put을 사용한다. (수정할 아이디도 url에 담아서 보내야한다.)

//      4-4. 글 삭제하기
//          앞에서 만든 삭제와 requset api를 연동하면 된다.
//          method는 delete를 사용하면 된다.

//      4-5. ReactHook (리액트가 제공하는 기능에 연결해서 그 값이나 기능을 사용하는 함수!)
//          use로 시작하는 함수들을 Hook이라고 한다. (내 코드를 다른 프로그램에 연결해두면 그 프로그램이 나중에 내 코드를 실행하도록 하는 것)
//          useEffect : 리액트가 관리하는 State에 연결해서 변수처럼 값을 사용
//                      내 콜백 함수를 리액트에 연결해서 렌더링 후에 함수 실행하도록 할 수 있다.
//          useRef : 리액트가 관리하는 Ref객체에 연결해서 current 값을 사용

//          리액트 훅 규칙
//          (1) 반드시 리액트 컴포넌트 함수나 커스텀 Hook함수 안에서 실행되어야 한다.          
//          (2) 반드시 함수의 최상위에서 실행해야한다. (반복문이나 조건문 안에서 쓰면 안된다는 뜻)

//          함수를 useEffect의 디펜던시 리스트에 추가해줘야한다.
//          그냥 추가하면 무한루프에 빠지니까 useCallback() 감싸서 넣어야한다. 첫번째 파라미터는 함수, 두번째 파라미터는 디펜던시이다.
//          그러나 useState로 만든 세터함수는 디펜던시 리스트에 추가하지 않아도 된다.

//      4-6. exhaustive-deps 규칙
//          useCallback() : 함수를 디펜던시 리스트에 추가해야할 때 사용, 함수를 매번 새로 생성하는 것이 아니라 디펜던시 리스트가 변경될 때만 생성    

// 5. 전역 데이터 다루기
//      5-1. Context : Props와 State만으로 다루기 힘들 때 사용, 상황에 대한 정보,
//          전역 데이터를 다룰 때 Props와 State만을 사용하면 Props를 여러번 여러곳으로 내려줘야한다는 문제 발생 <- 프롭 드릴링
//          데이터 공유 범위를 정해야한다. <Context.Provider />라는 컴포넌트로 범위를 정해줄 수 있다.
//          Provider의 자손 컴포넌트에서는 Props를 거치지 않고 자유롭게 데이터를 사용할 수 있다.

//      5-2. Context 사용하기
//          createContext라는 함수로 Context를 만든다.
//          Context객체에서 Provider라는 컴포넌트로 컨텍스트 범위를 지정하고, 공유할 데이터를 value= 프롭으로 내려준다.
//          사용할 곳에서 useContext()를 사용해서 그 값을 리턴으로 받아온다.

//      5-3. Context 값에 State 사용하기

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);