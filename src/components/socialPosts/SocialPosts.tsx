import burgues from "../../assets/png/burgers.png";

export const SocialPosts = () => {
  return (
    <div className="flex flex-col items-center mt-[148px] w-full">
      <div className="text-center mb-[16px]">
        <h1 className="text-secondary text-[38px] font-bold">
          Publicações do instagram
        </h1>
        <p className="text-primary ">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
      </div>
      <div>
        <img src={burgues} alt="" className="w-full h-full" />
      </div>
      <div className="bg-300 w-full  uppercase text-[28px] text-center">
        <h1>
          • #empireburger • #empireburger • #empireburger • #empireburger •
          #empireburger
        </h1>
      </div>
    </div>
  );
};
