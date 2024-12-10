"use client";

import { useState } from "react";

export default function Wishlist({ wishlist, setWishlist }) {
    const removeFromWishlist = (dealID) => {
        setWishlist((prev) => prev.filter((item) => item.dealID !== dealID));
    };

    return (
        <div className="p-5 bg-gray-800 text-white rounded-md">
            <h3 className="text-xl mb-4 text-center">Your Wishlist</h3>
            {wishlist.length === 0 ? (
                <p className="text-center">Your wishlist is empty.</p>
            ) : (
                <ul className="space-y-4">
                {wishlist.map((game) => (
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
                </div>
                <button
                    onClick={() => removeFromWishlist(game.dealID)}
                    className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                >
                    Remove
                </button>
            </li>
                ))}
                </ul>
            )}
        </div>
    );
}
