import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [id]);
    console.log("personnages", data);

    return (
        <div className="h-screen bg-gradient-to-b from-blue-800 to-cyan-800 py-8">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Character Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Eye Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Birthdate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Starships
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edited
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-cyan-50">
                        <tr className="hover:bg-gray-50">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                                {data.name}
                            </th>
                            <td className="px-6 py-4">{data.eye_color}</td>
                            <td className="px-6 py-4">{data.birth_year}</td>
                            <td className="px-6 py-4">{data.gender}</td>
                            <td className="px-6 py-4">{data.starships}</td>
                            <td className="px-6 py-4">{data.created}</td>
                            <td className="px-6 py-4">{data.edited}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PeopleDetails;
