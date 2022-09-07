import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 via-purple-500 to-indigo-900'>
    <Router>
      <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:name" element={<Article />} />
        <Route path="/list" element={<ArticleList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
