import GetApi from "../services/GetApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BookOpen, StepBackIcon } from "lucide-react";
import { StepForwardIcon } from "lucide-react";

export default function Tafsir(){
    const { nomor } = useParams();
    const {
      data: tafsir,
      isPending,
      error,
    } = GetApi("https://equran.id/api/v2/tafsir/" + nomor);

    return (
    <div className="mx-auto px-3 md:px-5 lg:px-32 container mt-[98px]">
        {tafsir && (
        <div className="flex justify-between p-3 bg-base-300 mt-3 rounded">
          {tafsir && tafsir.data.suratSebelumnya ? (
            <Link to={`/tafsir/${tafsir.data.suratSebelumnya.nomor}`}>
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

          {tafsir && tafsir.data.suratSelanjutnya ? (
            <Link to={`/tafsir/${tafsir.data.suratSelanjutnya.nomor}`}>
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

{tafsir && (
          <div
            key={tafsir.data.nomor}
            className="bg-base-100 rounded-md p-5 hover:bg-base-200"
          >
            <div className="flex justify-between items-center">
              <div className="rounded-full bg-base-200 px-5 py-2 border-2 border-base-300">
                <h3 className="font-semibold text-lg">
                  Surah Ke {tafsir.data.nomor}
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-xl md:text-3xl text-right">
                  {tafsir.data.namaLatin}{" "}
                  <span className="text-base-content">({tafsir.data.arti})</span>
                </h3>
              </div>
            </div>
            <h4 className="text-lg mt-3 font-semibold">
              Terdiri Dari {tafsir.data.jumlahAyat} Ayat
            </h4>
            <p className="text-md md:text-lg font-semibold text-justify text-base-content mt-3">
              <span>Deskripsi Surah : </span> <br />
              {tafsir.data.deskripsi.replace(/<\/?[^>]+>/gi, "")}
            </p>
            <Link to={`/surat/${tafsir.data.nomor}`}>
            <button className="mt-3 btn btn-neutral">
              <BookOpen />
              Lihat Surah
            </button>
            </Link>
          </div>
        )}
         {tafsir &&
          tafsir.data.tafsir.map((tafsir) => (
            <div
              key={tafsir.ayat}
              className="bg-base-100 rounded-md p-5 mt-5 hover:bg-base-200"
            >
                <div className="rounded-full bg-base-200 text-2xl py-3 text-center w-full border-2 border-base-300">
                  <h3 className="font-semibold">Tafsir Ayat Ke {tafsir.ayat}</h3>
                </div>

                <div>
                  <p className="font-semibold text-xl md:text-xl leading-10 text-justify">
                    {tafsir.teks}
                  </p>
                </div>
            </div>
          ))}
    </div>
    </div>
    )
}