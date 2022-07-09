import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people")
            .then((res) => setData(res.data.results))
            .catch((err) => console.log(err));
    }, []);
    console.log("personnages", data);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };
    console.log("searchTerm", searchTerm);

    const nextPage = async () => {
        const result = await axios.get(
            `https://swapi.dev/api/people/?page=${data.length / 10 + 1}`
        );
        setData([...data, ...result.data.results]);
    };
    console.log("nextPage", nextPage);

    return (
        <div className="h-screen bg-gradient-to-b from-blue-800 to-cyan-800">
            <div className="container mx-auto p-4">
                <div className="searchBar my-8">
                    <input
                        type="text"
                        name="searchBar"
                        id="searchBar"
                        placeholder="Rechercher une personne"
                        onChange={handleSearchTerm}
                    />
                </div>
                <div className="search__results">
                    {data
                        .filter((people) =>
                            people.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        )
                        .map((people, index) => (
                            <Link key={index} to={`/people/${index + 1}`}>
                                <div className="search__result text-white hover:text-gray-400 hover:translate-x-4 duration-300">
                                    {people.name}
                                </div>
                            </Link>
                        ))}
                    <div>
                        <button className="btn btn-primary" onClick={nextPage}>
                            Affichez 10 personnages de +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default People;
