import { Play } from "lucide-react";
import GetApi from "../services/GetApi";
import Search from "../components/Search";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, isPending, error } = GetApi("https://equran.id/api/v2/surat");

  const [query, setQuery] = useState("");

  return (
    <div className="mx-auto px-3 md:px-5 lg:px-32 container mt-[99px]">

        <div className="bg-base-300 p-3 mt-3 rounded">
            <input type="text"
            className="w-full rounded bg-base-100 hover:bg-base-200 px-2 py-1 active:ring-base-300"
            placeholder="Cari Surah"
            onChange={(e)=> setQuery(e.target.value)}
            />
        </div>

          <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-base-300 mt-3 rounded p-3">
            {isPending && 
                <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg text-white"></span>
                </div>
            }
            {error && 
                <div className="flex justify-center">
                Failed Loading Data
                </div>
            }
      {data &&
        data.data.filter((surah) => surah.namaLatin.toLowerCase().includes(query)).map((surah) => (
            <Link to={`/surah/${surah.nomor}`}>
                <div key={surah.nomor} className="card bg-base-100 hover:bg-base-200 transition shadow-xl rounded">
                <div className="card-body py-5 px-5">
                    <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h2 className="card-title text-right">{surah.namaLatin}</h2>
                        <h2 className="text-lg text-base-content">{surah.arti}</h2>
                    </div>
                    <h3 className="text-xl font-bold font-arab mt-1">{surah.nomor}</h3>
                    </div>
                    <p>
                    Diturunkan di {surah.tempatTurun} <br /> {surah.jumlahAyat}{" "}
                    Ayat
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
                </div>
            </Link>
        ))}
          </div>

    </div>
  );
}
