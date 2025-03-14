import Link from "next/link";

export default function DetailPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Link style={{ backgroundColor: "lightblue" }} href="/todolist">
        전체리스트 화면으로 이동
      </Link>
      <h2>상세페이지</h2>
      <p>제목: </p>
      <p>내용: </p>
      <p>작성일자:</p>
    </div>
  );
}
