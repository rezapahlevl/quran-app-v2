import { useParams } from "react-router-dom";
import GetApi from "../services/GetApi";
import { BookOpen, StepBackIcon, StepForwardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Detail() {
  const { nomor } = useParams();
  const {
    data: surah,
    isPending,
    error,
  } = GetApi("https://equran.id/api/v2/surat/" + nomor);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="mx-auto px-3 md:px-5 lg:px-32 container mt-[99px]">
      {surah && (
        <div className="flex justify-between p-3 bg-base-300 mt-3 rounded">
          {surah && surah.data.suratSebelumnya ? (
            <Link to={`/surah/${surah.data.suratSebelumnya.nomor}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="btn btn-sm btn-neutral rounded"
              >
                <StepBackIcon />
              </button>
            </Link>
          ) : (
            <div></div>
          )}

          {surah && surah.data.suratSelanjutnya ? (
            <Link to={`/surah/${surah.data.suratSelanjutnya.nomor}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="btn-sm btn-neutral rounded"
              >
                <StepForwardIcon />
              </button>
            </Link>
            ) : (
            <div></div>
          )}
        </div>
      )}
      <div className="flex flex-col bg-base-300 mt-3 rounded-md p-3">
        {isPending && (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-white"></span>
          </div>
        )}
        {error && (
          <div className="flex justify-center">Failed Loading Data</div>
        )}
        {surah && (
          <div
            key={surah.data.nomor}
            className="bg-base-100 rounded-md p-5 hover:bg-base-200"
          >
            <div className="flex justify-between items-center">
              <div className="rounded-full bg-base-200 px-5 py-2 border-2 border-base-300">
                <h3 className="font-semibold text-lg">
                  Surah Ke {surah.data.nomor}
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-xl md:text-3xl text-right">
                  {surah.data.namaLatin}{" "}
                  <span className="text-base-content">({surah.data.arti})</span>
                </h3>
              </div>
            </div>
            <h4 className="text-lg mt-3 font-semibold">
              Terdiri Dari {surah.data.jumlahAyat} Ayat
            </h4>
            <p className="text-md md:text-lg font-semibold text-justify text-base-content mt-3">
              <span>Deskripsi Surah : </span> <br />
              {surah.data.deskripsi.replace(/<\/?[^>]+>/gi, "")}
            </p>
            {/* <Link to={`/tafsir/${surah.data.nomor}`}>
            <button className="mt-3 btn btn-neutral">
              <BookOpen />
              Lihat Tafsir
            </button>
            </Link> */}
            
          </div>
        )}
        {surah &&
          surah.data.ayat.map((ayat) => (
            <div
              key={ayat.nomorAyat}
              className="bg-base-100 rounded-md p-5 mt-5 hover:bg-base-200"
            >
              <div className="flex justify-between">
                <div className="rounded-full bg-base-200 h-10 px-4 py-2 border-2 border-base-300">
                  <h3 className="font-semibold text-md">{ayat.nomorAyat}</h3>
                </div>
                <div>
                  <p className="font-semibold font-arab text-2xl md:text-3xl leading-10 ml-5 md:ml-10 text-right">
                    {ayat.teksArab}
                  </p>
                  <h3 className="mt-3 font-semibold text-md md:text-lg text-zinc-400 tracking-wider ml-5 md:ml-10 text-right">
                    {ayat.teksLatin}
                  </h3>
                </div>
              </div>
              <p className="text-md md:text-lg text-base-content font-semibold text-justify mt-3">
                {ayat.teksIndonesia}
              </p>
            </div>
          ))}
      </div>
      {surah && (
        <div className="flex justify-between p-3 bg-base-300 mt-3 rounded">
          {surah && surah.data.suratSebelumnya ? (
            <Link to={`/surah/${surah.data.suratSebelumnya.nomor}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="btn btn-sm btn-neutral rounded"
              >
                <StepBackIcon />
              </button>
            </Link>
          ) : (
            <div></div>
          )}

          {surah && surah.data.suratSelanjutnya ? (
            <Link to={`/surah/${surah.data.suratSelanjutnya.nomor}`}>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                className="btn-sm btn-neutral rounded"
              >
                <StepForwardIcon />
              </button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
}
