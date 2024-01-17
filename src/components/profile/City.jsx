import { CityIcon } from "../Icons";

export default function City({ data }) {
  return (
    <>
      {data.location && (
        <p className={`flex gap-1 my-2 mx-0 text-[0.8rem] align-middle`}>
          <CityIcon />
          <span className="text-[0.8rem]">{data.location}</span>
        </p>
      )}
    </>
  );
}
