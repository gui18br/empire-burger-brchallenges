import bodyClock from "../../assets/png/body-clock.png";
import clock from "../../assets/png/clock.png";

function OpeningHours() {
  return (
    <div className="ml-122 mt-16">
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-red-600 w-570 h-130.93 rounded-md col-span-1 flex justify-center items-center gap-10">
          <div className="relative bg-red-700 p-5 rounded-full mt-1">
            <img src={bodyClock} alt="Body Clock" className="" />
            <div className="absolute flex top-9 right-7 justify-center items-center">
              <img src={clock} alt="Clock" className="block" />
            </div>
          </div>
          <div
            className="pl-6"
            style={{ borderLeftWidth: "0.01px", borderColor: "#1D060566" }}
          >
            <h1 className="text-25 font-bold text-[#1D0605B0]">
              Horário de funcionamento
            </h1>
            <p className="text-white">
              Segunda-feira a sexta-feira: 17h00 - 23h00
            </p>
            <p className="text-white">Sabado a Domíngo: 18h30 - 23h00</p>
          </div>
        </div>
        <div className="rounded-md col-span-1 flex flex-col align-middle justify-center">
          <h2 className="text-18 text-primary">
            Não esqueça de marcar a gente no Instagram:
          </h2>
          <h1 className="text-3xl text-red-700 font-bold">#EMPIREBURGER</h1>
        </div>
      </div>
    </div>
  );
}

export default OpeningHours;
