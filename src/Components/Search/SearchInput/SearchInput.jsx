import clearButton from "/clear-icon.png";
import "./SearchInput.css";

export const SearchInput = ({ searchInputValue, handleChange, clearSearch}) => {
    return (
        <div className="search-input-container">
            <input type="text" value={searchInputValue} placeholder="Search here..." onChange={handleChange} />

            {searchInputValue && (
                <button onClick={clearSearch}>
                    <img width="18px" height="18px" style={{ objectFit: "contain" }} src={clearButton} alt="" />
                </button>
            )}
        </div>
    );
};
