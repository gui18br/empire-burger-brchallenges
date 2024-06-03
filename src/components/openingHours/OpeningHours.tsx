import clock from "../../assets/timer.svg";

function OpeningHours() {
  return (
    <div className="flex justify-center mt-16 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 w-[88%]">
        <div className="bg-red-600 h-130.93 rounded-xl text-white flex justify-center items-center md:gap-8 gap-3 align-middle">
          <div className=" ml-2">
            <img src={clock} alt="" className=" bg-red-700 p-5 rounded-full " />
          </div>
          <div className="pl-4 md:mr-20 border-l-[0.1px] border-red-800">
            <h1 className="md:text-25 text-18 font-bold text-[#1D0605B0]">
              Horário de funcionamento
            </h1>
            <p className="text-white text-[14px]">
              Segunda-feira a sexta-feira: <strong>17h00 - 23h00</strong>
            </p>
            <p className="text-white text-[14px]">
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
