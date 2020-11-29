import React from 'react';

const SearchPage = (props) => {
	const {data = [], onInputChange} = props;
	const inputRef = React.createRef();

	const formHandler = (evt) => {
		evt.preventDefault();
		const input = inputRef.current;
		onInputChange(input.value);
	};

	return (
		<>
			<form onSubmit={formHandler}>
				<input ref={inputRef} type="text" placeholder="na co masz ochote" />
				<button>search</button>
			</form>
			{data.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</>
	);
};

export default SearchPage;
