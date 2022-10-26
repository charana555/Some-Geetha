import { Link } from "react-router-dom";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";
const SongCard = ({ song, i }) => {
  const activeSong = "Hello";

  return (
    <div className=" flex flex-col w-[205px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer  ">
      <div className=" relative w-full h-46 group ">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="" />
      </div>

      <div className=" flex flex-col mt-4 ">
        <p className=" font-semibold text-lg text-white truncate ">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className=" text-sm text-gray-300 truncate mt-1 ">
          <Link
            to={
              song.artists
                ? `/srtists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
