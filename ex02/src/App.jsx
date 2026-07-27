import Header from "./components/header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const name = '장준우'
  
  return (
    <div>
      <Header />
      <Main name={name} location={'밀양시'}/>
      <Footer />
    </div>
  );
}

export default App;