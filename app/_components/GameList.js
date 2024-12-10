"use client";

import { useState, useEffect } from "react";

export default function GameList({ addToWishlist }) {
    const [games, setGames] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchGames = async (title = "") => {
        setLoading(true);
        try {
            const response = await fetch(
            `https://www.cheapshark.com/api/1.0/deals?pageSize=30&title=${title}`
            );
            const data = await response.json();
            setGames(data);
        } catch (error) {
            console.error("Error fetching games:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGames(); // Fetch top 30 games by default
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        fetchGames(searchTitle);
    };

    return (
        <div className="p-5 bg-gray-800 text-white rounded-md">
            <h2 className="text-xl mb-4">Search for Video Games</h2>
            <form onSubmit={handleSearch} className="mb-5">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white mr-2"
                />
                <button
                    type="submit"
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
            {loading ? (
                <p>Loading games...</p>
            ) : (
                <ul className="space-y-4">
                {games.map((game) => (
                    <li
                        key={game.dealID}
                        className="p-3 bg-gray-700 rounded flex justify-between"
                    >
                    <div>
                        <p>
                            <strong>Title:</strong> {game.title}
                        </p>
                        <p>
                            <strong>Sale Price:</strong> ${game.salePrice}
                        </p>
                        <p>
                            <strong>Normal Price:</strong> ${game.normalPrice}
                        </p>
                        <p>
                            <strong>Savings:</strong> {game.savings}%
                        </p>
                    </div>
                    <button
                        onClick={() => addToWishlist(game)}
                        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                    >
                        Add to Wishlist
                    </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}
