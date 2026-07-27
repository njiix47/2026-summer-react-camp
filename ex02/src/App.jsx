// import Header from "./components/header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
import Forum from "./components/Forum";
import ProjectCard from "./components/PrpjectCard";
// import Body from "./components/Body";
import Body from "./components/StateTest";

function App() {
  return (
    <div>
      <Forum />
      <Main />
      <ProjectCard
        title = "급식 혼잡도 알림 서비스"
        role = "web / server"
        count = "전공별 2명"
      >
        <p>급식실의 시간대별 혼잡도를 실시간으로 안내하는 프로젝트입니다.</p>
      </ProjectCard>
      <Body />
    </div>
  );
}

export default App;