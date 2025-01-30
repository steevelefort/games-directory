import React, { useContext } from "react";
import BookmarksContext from "../BookmarksContext";
import { Link } from "react-router-dom";

const Bookmarks = () => {

  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  const deleteBookmarks = (index) => {
    const tmpBookmarks = [...bookmarks]; // On créé une copie de bookmarks
    tmpBookmarks.splice(index, 1); // On supprime 1 entrée à partir de l'index
    setBookmarks(tmpBookmarks); // On met à jour le state avec le nouveau ttableau
  }

  return (
    <>
      <Link to={'/'}>Home</Link>

      <ul className="sm:w-full md:w-2/3 mx-auto px-2 text-2xl">
        {bookmarks.map((bookmark, index) => (
          <li className="py-2 px-4 border-b border-gray-500" key={index}>{bookmark.name}
            <button onClick={() => { deleteBookmarks(index) }}>🗑️</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Bookmarks;
