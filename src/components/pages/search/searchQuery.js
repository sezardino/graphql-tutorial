import {gql} from '@apollo/client';

const searchQuery = gql`
	query($term: String) {
		search(term: $term, location: "warsaw", limit: 10) {
			total
			business {
				id
				name
				url
				photos
			}
		}
	}
`;

export default searchQuery;
