// fetch를 호출하고 받은 response body를 리턴하는 함수
// export async function getReviews(order = "createdAt") {
//   const query = `order=${order}`;
//   const response = await fetch(
//     "https://learn.codeit.kr/9820/film-reviews?" + query
//   );
//   const body = await response.json();
//   return body;
// }

// offset으로 페이지네이션
// 이 api에서 offset은 지금 받아온 개수, limit은 추가로 받아올 개수다.
export async function getReviews({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/9820/film-reviews?${query}`
  );
  const body = await response.json();
  return body;
}

// 고의로 에러 유발
// export async function getReviews({
//   order = "createdAt",
//   offset = 0,
//   limit = 6,
// }) {
//   // throw new Error("버그가 아니라 기능입니다.");  // 고의로 오류 발생
//   const query = `order=${order}&offset=${offset}&limit=${limit}`;
//   const response = await fetch(
//     `https://learn.codeit.kr/error/film-reviews?${query}` // 일부러 잘못된 경로로 요청
//   );
//   // const body = await response.json(); // 리스폰스에 상관없이 항상 json 메소드를 실행하면 리스폰스가 무엇이든 json형식이 입력되지 않았다고 뜬다.
//   if (!response.ok) {
//     throw new Error("리뷰를 불러오는데 실패했습니다.");
//   } else {
//     const body = await response.json();
//     return body;
//   }
// }
