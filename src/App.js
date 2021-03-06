import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookList from "./components/books/BookList";
import BookDetail from "./components/books/BookDetail";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>

				<Switch>
					<Route path="/" exact>
						<BookList />
					</Route>
					<Route path="/detail/:id">
						<BookDetail />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
