import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
const apiKey =
	'ZY1_j0JnNBeF8eqk7leL6VysAAb_IlYkXrqd6UfCr42PUpjeNhV4RUcHMt-P7CmCKVlACGSkPQUKlpiLTa5rH6JhkKfX1wd-UHXj1OtKgZ9Q-Sx9u0Hk6FGFANHCX3Yx';
const cache = new InMemoryCache();
const client = new ApolloClient({
	uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
	headers: {
		'Accept-Language': 'pl-PL',
		Authorization: `Bearer ${apiKey}`,
	},
	cache,
});

export default client;
