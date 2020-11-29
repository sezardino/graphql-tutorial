import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';
import client from './client/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
// import history from './history/history';

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router>
				<App />
			</Router>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
