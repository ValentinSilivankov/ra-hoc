import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { HomePage } from "./HomePage.tsx";
import Time from "./components/time/Time.tsx";
import Highlight from "./components/highlight/Highlight.tsx";

function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/time" element={<Time />} />
					<Route path="/highlight" element={<Highlight />} />
				</Routes>
			</BrowserRouter>

		</div>
	)
}

export default App
