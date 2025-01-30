import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Details = () => {
  const { slug } = useParams()
  const [game, setGame] = useState({})

  useEffect(() => {
    const apiKey = '80a6aa70a6744d24ab2d250b2d0fd19e';
    const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => { 
        console.log(data)
        setGame(data)
      })
      .catch(() => { 
        alert('Une erreur est survenue') 
      })
  }, [])


  return (
    <>
    <div>Ceci est la page du jeu dont le slug est "{slug}"</div>
    <div>Le nom du jeu est "{game.name}"</div>
    </>
  )
}

export default Details
