import "./SearchBar.scss";
import PropTypes from "prop-types";
import { FcSearch } from "react-icons/Fc";

export default function SearchBar({inputValue, handleSearch}) {

	return (
		<div className="searchBar">
			<input
				type="search"
				name="searchPizza"
				placeholder="looking for something"
				className="searchPizza"
				id="searchPizza"
				value={inputValue}
				onChange={(e) => handleSearch(e)}
			/>
			<FcSearch />
		</div>
	);
}

SearchBar.propTypes = {
	inputValue: PropTypes.string,
	handleSearch: PropTypes.func,
}
