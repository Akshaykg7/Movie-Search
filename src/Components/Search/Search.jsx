import search from "/search-icon.png";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = () => {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchList, setSearchList] = useState([]);

    const handleChange = (event) => {
        setSearchInputValue(event.target.value);
    };

    const clearSearch = () => {
        setSearchInputValue("");
    };

    const fetchMovieList = async () => {
        try {
            const response = await axios(API_URL, {
                params: {
                    query: searchInputValue,
                },
            });
            setSearchList(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchMovieList();
        }, 300);
        return () => {
            clearTimeout(timeout);
        };
    }, [searchInputValue]);

    return (
        <div className="search-container">
            <div className="heading-section">
                <img src={search} alt="" />
                <h1>Looking for a movie?</h1>
            </div>

            <SearchInput handleChange={handleChange} searchInputValue={searchInputValue} clearSearch={clearSearch} />
            <SearchList searchList={searchList} />
        </div>
    );
};
