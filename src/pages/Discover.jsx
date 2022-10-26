import { SongCard, Loader, Error } from "../components";
import { genres } from "../assets/constants.js";
import { useGetTopChartsQuery } from "../redux/services/songApi";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title={"Songs are Loading..."} />;

  if (error) return <Error />;
  return (
    <section className=" flex flex-col ">
      <div className=" flex w-full justify-between items-center flex-col sm:flex-row mt-4 mb-10 ">
        <h2 className="font-bold text-3xl text-white text-left ">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className=" bg-black p-3 text-slate-400 text-sm rounded-lg outline-none mt-5 sm:mt-0 "
        >
          {genres.map((genre) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className=" flex flex-wrap sm:justify-center justify-start gap-8">
        {data?.map((song, i) => (
          <SongCard key={song.key} song={song} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
