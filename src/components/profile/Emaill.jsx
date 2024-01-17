import { EmailIcon } from "../Icons";

export default function Email({ data }) {
  return (
    <>
      {data.email && (
        <p className={`flex gap-1 my-2 mx-0 text-[0.8rem] align-middle`}>
          <EmailIcon />
          <a
            className="no-underline text-black hover:text-[#367ad3] hover:underline"
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noreferrer"
          >
            {data.email}
          </a>
        </p>
      )}
    </>
  );
}
