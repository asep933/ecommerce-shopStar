const Hero = () => {
  return (
    <div
      className="h-[72vh] bg-no-repeat bg-cover 
    bg-[url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
     bg-center bg-fixed flex flex-col justify-center relative"
    >
      <div className="w-full h-full bg-black absolute opacity-45"></div>

      <div
        className="w-1/2 h-1/3 rounded-lg bg-opacity-75 
        font-bold text-white mx-4 lg:mx-32 drop-shadow-md lg:text-lg text-base space-y-4"
      >
        <h2 className="text-4xl lg:text-6xl">
          Big <span className="text-accent">Sale</span>
        </h2>
        <p>
          Belanja di shopStar daptkan Diskon melimpah, daptkan diskon hingga 99%
        </p>
        <p>Buruan jangan sampai terlewatkan!</p>
      </div>
    </div>
  );
};

export default Hero;
