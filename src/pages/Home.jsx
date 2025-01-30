import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BookmarksContext from "../BookmarksContext";

const Home = () => {
  const [searchText, setSearchText] = useState(''); // Ajouter cela
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  // On utilise un state pour garder nos données
  const [games, setGames] = useState([
    { id: 1, name: "Jeux 1", rating: 4.6 },
    { id: 2, name: "Jeux 2", rating: 3.5 },
    { id: 3, name: "Jeux 3", rating: 4.2 },
    { id: 4, name: "Jeux 4", rating: 1.5 },
    { id: 5, name: "Jeux 5", rating: 3.7 },
    { id: 6, name: "Jeux 6", rating: 5 },
  ]);
  const handleSearch = (e) => {
    e.preventDefault();
    const apiKey = '80a6aa70a6744d24ab2d250b2d0fd19e';
    const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURI(searchText)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => { setGames(data.results) })
      .catch(() => { alert('Une erreur est survenue') })
  }

  const isBookmarked = (game) => !!bookmarks.find(g => g.slug === game.slug);

  const addBookmark = (game) => {
    if (isBookmarked(game)) {
      setBookmarks(bookmarks.filter(g => g.slug !== game.slug));
      return;
    }
    setBookmarks([...bookmarks, game]);
  }

  return (
    <>
      <form className="my-2 sm:w-full md:w-2/3 mx-auto flex px-2 text-2xl" onSubmit={handleSearch} >
        <input type="text" className="rounded-l border border-gray-500 flex-grow px-4 py-2" autoFocus={true} placeholder="Rechercher"
          onInput={e => { setSearchText(e.target.value) }}
          value={searchText}
        />
        <button type="submit" className="bg-blue-700 rounded-r text-white px-4 py-2">Rechercher</button>
      </form>

      <Link to={'/bookmarks'}>Favoris</Link>
      <Link to={'/shops'}>Mon magasin</Link>
      {/* Ajoutons notre liste */}
      <ul className="sm:w-full md:w-2/3 mx-auto px-2 text-2xl">
        {games.map(game => (
          <li className="py-2 px-4 border-b border-gray-500" key={game.id}>
            <Link to={`/details/${game.slug}`} className="flex">
              <img src={game.background_image} alt="" className="w-24 pr-2" />
              <div className="text-2xl font-bold flex-grow">{game.name}</div>
              <div>{game.rating}</div>
              <div className="pl-2" onClick={ (e) => { e.preventDefault(); addBookmark(game)}} >{isBookmarked(game) ? "★" : "☆"}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
