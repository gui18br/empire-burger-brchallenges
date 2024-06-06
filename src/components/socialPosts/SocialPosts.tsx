import burgues from "../../assets/png/burgers.png";

export const SocialPosts = () => {
  return (
    <div className="flex flex-col items-center mt-[148px] w-full">
      <div className="text-center">
        <h1 className="text-secondary md:text-[38px] text-25 font-bold">
          Publicações do instagram
        </h1>
        <p className="text-primary mb-4">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
        <div>
          <img src={burgues} alt="" className="w-full h-full" />
        </div>
        <div className="bg-300 w-full uppercase md:text-[28px] text-[10px] text-center">
          <h1>
            • #empireburger • #empireburger • #empireburger • #empireburger
          </h1>
        </div>
      </div>
    </div>
  );
};
