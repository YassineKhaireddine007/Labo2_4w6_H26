"use client";

import { use, useState } from "react";
import { VideoGame } from "./_types/video-game";

export default function Home() {
  const [loveList, setloveList] = useState(["HTML", "JS", "JQuery"])
  const [userage, setuserage] = useState(23)
  const [countdown , setcountdown] = useState(10); 
  const [Exploded , setExploded] = useState(false);
  const [IsLight , setIsLight] = useState(true) 
  const [word , setword] = useState("")

  const tickleBomb = () => {
    if (Exploded) return; 
    setcountdown(prev => {
    const decreased = prev - 1;
    const next = decreased < 0 ? 0 : decreased;
    if (next === 0) setExploded(true);
    return next;
    });
  };
 function DisplaySentence() {
    if (userage >= 18) {
      return <div> J'aime les <span>cigarettes </span>. </div>
    } else if (userage < 18) {
      return <div> J'aime les <span>LEGO Star Wars</span>. </div>
    }

  }

  function toggleTheme() {
    setIsLight(prev => !prev);
  }

  function Salut() {
    alert(`Salut ${word}`);
  }
  // Servira plus tard
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);

 

  return (
    <div className="w-5xl m-auto mt-2">

      {/* Rangée du titre */}
      <div className="flex align-items-center bg-gray-100 rounded-lg p-3 py-6">
        <h1 className="text-2xl weight-bold">Le laboratoire 2 est dynamique 🗿</h1>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 2 : liste */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <div className="m-2">
            <ul className="list-disc ml-4">
              {loveList.map(
                (i) => <li key={i}>{i}</li>
              )}
            </ul>
          </div>
        </div>

        {/* Exercice 3 : condition */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <div>
            {DisplaySentence()}
          </div>
        </div>

        {/* Exercice 4 : événement */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
          <button onClick={tickleBomb}className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300">Chatouiller la bombe</button>
          <p>Clics restants : {countdown} {Exploded ? '💥' : '💣'}</p>
        </div>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 5 : thème */}
        
    <div className={(IsLight ? 'light' : 'dark') + ' rounded-lg p-2 flex-1'}>
      <button
        onClick={toggleTheme}
        className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300"
      >
        Changer le fond
      </button>
    </div>
  

        {/* Exercice 6 : saluer */}
        <div className="bg-gray-100 rounded-lg p-2 flex-1">
      <input
        value={word}
        onChange={(e) => setword(e.target.value)}
        type="text"
        className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1"
        name="word"
        placeholder="Nom"
      />

      <button
        onClick={Salut} 
        className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300"
      >
        Saluer
      </button>
    </div>

        {/* Exercice 7 : couleur de fond */}
        <div className="rounded-lg p-2 flex-1 cyan">
          <select name="backgroundColor" className="border-gray-500 border-1 px-2 py-1 rounded-sm bg-gray-200 my-2 cursor-pointer">
            <option value="cyan">Bleu</option>
            <option value="red">Rouge</option>
            <option value="amber">Jaune</option>
          </select>
        </div>
      </div>

      <div className="flex mt-2 gap-3">

        {/* Exercice 8 : grand formulaire */}
        <div className="bg-gray-100 rounded-lg p-2 flex-3">
          <div className="">
            <div className="mb-1">
              Nom : <input type="text" name="vgName" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" />
            </div>
            <div className="mb-1">
              Nombre maximal de joueurs : <input type="number" name="vgNbPlayers" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" />
            </div>
            <div className="mb-1">
              Jeu sorti <input type="checkbox" name="vgReleased" />
            </div>
            <div className="mb-1">
              Genres (séparés par des virgules, sans espaces) : <input type="text" name="vgGenre" className="bg-white px-2 border-1 border-gray-500 rounded-sm mr-1" />
            </div>
            <div>
              Mode de jeu :
            </div>
            <div>
              → Hors ligne <input type="radio" name="vgMode" value="hors ligne" />
            </div>
            <div>
              → En ligne <input type="radio" name="vgMode" value="en ligne" />
            </div>
            <div className="mb-1">
              → En ligne et hors ligne <input type="radio" name="vgMode" value="en ligne et hors ligne" />
            </div>
            <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300">Créer le jeu</button>
          </div>
        </div>

        <div className="flex-2">

          {/* Exercice 9 : condition */}
          <div className="bg-gray-100 rounded-lg p-2 basis-full">
            {videoGames.map((v) =>
              <div key={v.name}>• {v.name} ({v.genre.map((g) => <span key={g}>{g} </span>)}) se joue jusqu'à {v.nbPlayers} joueur(s) {v.mode} et {v.released ? 'est déjà sorti' : 'n\'nest pas encore sorti'}.</div>
            )}
          </div>

          <div className="flex mt-2 gap-3">

            {/* Exercice 10 : retirer dernier élément tableau */}
            <div className="bg-gray-100 rounded-lg p-2 flex-1">
              <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300">Retirer dernier jeu</button>
            </div>

            {/* Exercice 11 : modifier tous les objets d'un tableau */}
            <div className="bg-gray-100 rounded-lg p-2 flex-1">
              <button className="border-gray-500 border-1 px-2 rounded-sm bg-gray-200 my-2 cursor-pointer active:bg-gray-300">+1 joueur</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
