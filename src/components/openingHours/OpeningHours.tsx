import bodyClock from "../../assets/png/body-clock.png";
import clock from "../../assets/png/clock.png";

function OpeningHours() {
  return (
    <div className="flex justify-center mt-16">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ml-3">
        <div className="bg-red-600 w-570 h-130.93 rounded-xl text-white flex justify-center items-center gap-6">
          <div className="relative bg-red-700 p-5 rounded-full ">
            <img src={bodyClock} alt="Body Clock" className="" />
            <div className="absolute flex top-9 right-7 justify-center items-center">
              <img src={clock} alt="Clock" className="block" />
            </div>
          </div>
          <div
            className="pl-6 mr-5"
            style={{ borderLeftWidth: "0.01px", borderColor: "#1D060566" }}
          >
            <h1 className="text-25 font-bold text-[#1D0605B0]">
              Horário de funcionamento
            </h1>
            <p className="text-white">
              Segunda-feira a sexta-feira: <strong>17h00 - 23h00</strong>
            </p>
            <p className="text-white">
              Sabado a Domíngo: <strong>18h30 - 23h00</strong>
            </p>
          </div>
        </div>
        <div className="bg-[#FAF3F2] text-black flex flex-col align-middle justify-center">
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
