const Loader = ({ loader }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-24 h-24 mt-[50%] ml-[50%]"
        src={loader}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
