import React, { useEffect, useState } from 'react';
import "./Search.css"
import SearchInfo from './SearchInfo';
import SearchItem from './SearchItem';

export default function Project() {

    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState(SearchInfo);
    useEffect(() => {
        if (searchText === '') return;
        setSearchData(() =>
            SearchInfo.filter((item) =>
                item.fundsname.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setSearchData(SearchInfo);
        }
    };

    return (
        <>
            <div id="projects">

                <div className="container_project">
                    <div className="projects__searchBar">
                        <form role="search" id="form">
                            <input type="search" id="search__input"
                                value={searchText}
                                onChange={handleChange}
                                placeholder="Search for stocks"
                                aria-label="Search through section content" />
                            <button><svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg></button>
                        </form>
                    </div>
                    <div className="projects__allItems">
                        {searchData.map((item) => (
                            <SearchItem
                                key={item.id}
                                fundsname={item.fundsname}
                                noOfMonths={item.noOfMonths}
                                noOfInvestors={item.noOfInvestors}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>

    )
}
