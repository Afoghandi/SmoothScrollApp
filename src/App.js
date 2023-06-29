import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages';
import SigninPage from './pages/signin';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />

				<Route path='/signin' element={<SigninPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
