export default function Data({ data }) {
  return (
    <>
      {data.avatar_url && (
        <img
          className={`w-[90%] h-auto rounded-[50%] bg-white mt-4 border-[1px] border-solid border-[#b3b7bb] mb-4`}
          src={data.avatar_url}
          alt="avatar"
        />
      )}
      <p className="text-[1.4rem] m-0">{data.name}</p>
      <p className="mt-[0.2rem] mr-0 mb-4 ml-0 text-[#63676b] text-[1.2rem]">
        {data.login}
      </p>
      <small>{data.bio}</small>
    </>
  );
}
