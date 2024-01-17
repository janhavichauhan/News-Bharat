import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Apple from './components/Apple';
import Tesla from './components/Tesla';
import Business from './components/Business';
import Tech from './components/Techcrunch';
import Article from './components/Article';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <h1>NEWS-BHARAT</h1>
                <nav>
                    <Link to="/Apple"><button>Apple</button></Link>
                    <Link to="/Tesla"><button>Tesla</button></Link>
                    <Link to="/Business"><button>Business</button></Link>
                    <Link to="/Techcrunch"><button>Techcrunch</button></Link>
                    <Link to="/Article"><button>Article</button></Link>
                </nav>

                <Routes>
                    <Route path="/Apple" element={<Apple />} />
                    <Route path="/Tesla" element={<Tesla />} />
                    <Route path="/Business" element={<Business />} />
                    <Route path="/Techcrunch" element={<Tech />} />
                    <Route path="/Article" element={<Article />} />
                </Routes>
            </div>
        </Router>
    );
}
