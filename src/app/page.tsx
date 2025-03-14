import { Intro } from "@/types/introData";

export default async function Home() {
  const res = await fetch("http://localhost:4000/intro");
  const data: Intro = await res.json();

  return (
    <div className="home-container">
      <div className="intro-section">
        <h1 className="intro-title">React to Next.js 마이그레이션 프로젝트</h1>
        <div className="description-text">
          <p>
            SSG 페이지는 빌드 시점에 데이터를 미리 가져와서 캐싱 후, 사용자 요청
            시 캐싱해둔 데이터로 페이지를 렌더링하는 방식입니다.
          </p>
          <p>변경되지 않는 정적인 페이지에 적절한 렌더링 방식입니다.</p>
        </div>
        <div className="intro-descriptions">
          <p className="description">{data.description1}</p>
          <p className="description">{data.description2}</p>
          <p className="description">{data.description3}</p>
        </div>
      </div>
    </div>
  );
}
