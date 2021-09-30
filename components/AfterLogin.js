import Thumbnails from "./Thumbnail";

function AfterLogin({ requests }) {
  return (
    <div className="px-5 my-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  flex-wrap justify-center">
      {requests.map((result) => (
        <Thumbnails key={result.id} result={result} />
        // chceck
      ))}
    </div>
  );
}

export default AfterLogin;
