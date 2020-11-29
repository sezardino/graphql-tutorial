import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/home';
import {SearchPage} from './components/pages/search';

const App = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<Link to="/search">search</Link>
			<Switch>
				<Route path="/" exact render={() => <HomePage />} />
				<Route path="/search" render={() => <SearchPage />} />
			</Switch>
		</>
	);
	// return <Some id={15125} />;
};

export default App;
