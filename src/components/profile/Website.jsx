import { WesbsiteIcon } from "../Icons";

export default function Website({ data }) {
  return (
    <>
      {data.blog && (
        <p className={`flex gap-1 my-2 mx-0 text-[0.8rem] align-middle`}>
          <WesbsiteIcon />
          <a
            className="no-underline text-black hover:text-[#367ad3] hover:underline"
            href={data.blog}
            target="_blank"
            rel="noreferrer"
          >
            {data.blog}
          </a>
        </p>
      )}
    </>
  );
}
