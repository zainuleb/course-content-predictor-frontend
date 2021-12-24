import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/nav';
import ProjectTitle from './components/projectTitle';
import Analytics from './components/analytics';
import Footer from './components/footer';
import RenderResults from './components/renderResults';
import Model from './components/model';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProjectTitle />
      <RenderResults />
      <Analytics />
      <Model />
      <Footer />
    </div>
  );
}

export default App;
