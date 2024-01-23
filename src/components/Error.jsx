const Error = ({ octocatError, error }) => {
  return (
    <section className="flex items-center justify-center">
      <img src={octocatError} alt="octocat-error" width={280} height={280} />
      <div className="flex flex-col">
        <h2 className="text-[2rem] m-0 font-bold leading-[1.1]">{error}</h2>
        <p className="text-[0.9rem] font-bold text-[#919599]">
          Make sure that the
          <strong className="text-black"> username</strong> has no errors!
        </p>
      </div>
    </section>
  );
};

export default Error;
