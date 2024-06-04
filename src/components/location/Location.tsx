export function Location() {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="text-center">
        <h1 className="md:text-32 text-25 text-secondary font-bold uppercase">
          Onde fica o nosso castelo
        </h1>
        <p className="text-primary">
          Estaremos de portas abertas para a nossa realeza.
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5579.74499928091!2d-46.65434140986845!3d-23.581773736025145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1717246869365!5m2!1spt-BR!2sbr"
          loading="lazy"
          className="w-full h-52 mt-8 border-0"
          allowFullScreen={false}
        ></iframe>
      </div>
    </div>
  );
}
