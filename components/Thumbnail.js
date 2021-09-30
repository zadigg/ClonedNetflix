import Image from "next/image";

function Thumbnails({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className="group p-2 cursor-pointer transition duration-100 
            ease-in transform sm-hover:scale-115 hover:z-50 "
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />

      <div>
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className=" mt-1 whitespace-nowrap overflow-hidden text-base md:text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        <p className=" flex whitespace-nowrap overflow-hidden text-sm md:text-2xl items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} . {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnails;
