import rectangle from "../../assets/png/Rectangle 596.png";
import woman from "../../assets/png/woman.png";

function PersonalizedService() {
  return (
    <div>
      <div className="flex justify-center mt-[219px]">
        <div className="relative">
          <img src={rectangle} alt="" />
          <img
            src={woman}
            className="absolute top-0 bottom-36 left-0 right-0 m-auto"
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="ml-6">
          <div className="flex flex-col items-start">
            <h1 className="text-secondary font-bold text-[41px] mr-2">
              ATENDIMENTO
            </h1>
            <h1 className="bg-300 text-secondary p-1 rounded-lg text-[41px] font-bold">
              PERSONALIZADO
            </h1>
            <div className="flex items-center mt-5">
              <h2 className="text-primary text-start text-[16px] mr-1 mb-4">
                Todos os nossos clientes são tratados como rei e <br /> rainha,
                com a nossa colunaria artesanal.
              </h2>
            </div>
            <button className="bg-red-600 text-white h-[53px] w-[230px] rounded-md text-[23px] mt-3 transition-transform transform hover:-translate-y-1">
              Cardápio
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[128px]">
        <hr className="w-[88%] border-[#1D060526]" />
      </div>
    </div>
  );
}

export default PersonalizedService;
