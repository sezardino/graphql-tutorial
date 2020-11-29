import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import SearchPage from './search';
import searchQuery from './searchQuery';

const WithSearch = (props) => {
	const [term, setTerm] = useState('');
	const {data, loading, error} = useQuery(searchQuery, {variables: {term}});
	if (loading) {
		return <p>loading</p>;
	}
	return <SearchPage {...props} data={data.search.business} onInputChange={setTerm} />;
};

export default WithSearch;
