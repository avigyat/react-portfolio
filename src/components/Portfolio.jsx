import React from "react";
import textplayer from "../assets/portfolio/text.jpg";
import inotebook from "../assets/portfolio/inotebook.jpg";
import news from "../assets/portfolio/news.jpg";

const Portfolio = () => {
    const portfolios =[
        {
            id:1,
            src:textplayer,
            tittle:'TEXT-PLAYER',
            demo:'https://github.com/avigyat/text_player.git',
            code:'https://github.com/avigyat/text_player.git'
        },
        {
            id:2,
            src:inotebook,
            tittle:'iNotebook',
            demo:'https://github.com/avigyat/inotebook.git',
            code:'https://github.com/avigyat/inotebook.git'
        },
        {
            id:3,
            src:news,
            tittle:'News-App',
            demo:'https://github.com/avigyat/news-app.git',
            code:'https://github.com/avigyat/news-app.git'
        }

    ]
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to to-gray-700 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check-out Some of my personal projects here-</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolios.map(({id,src,tittle,demo,code})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="flex items-center justify-center py-1">{tittle}</div>
                  <img src={src} alt="navbar" className="rounded-md duration-200 hover:scale-105"></img>
                  <div className="flex items-center justify-center py-1">
                  <a href={demo} target="_blank" rel="noreferrer"className="w-1/2 px-2 py-2 m-4 duration-200 hover:scale-105">demo</a>
                  <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-2 py-2 m-4 duration-200 hover:scale-105">code</a>
                </div>
                </div>
            ))
        }

         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
