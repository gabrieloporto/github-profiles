import { TwitterIcon } from "../Icons";

export default function Twitter({ data }) {
  return (
    <>
      {data.twitter_username && (
        <p className={`flex gap-1 my-2 mx-0 text-[0.8rem] align-middle`}>
          <TwitterIcon />
          <a
            className="no-underline text-black hover:text-[#367ad3] hover:underline"
            href={`https://twitter.com/${data.twitter_username}`}
            target="_blank"
            rel="noreferrer"
          >
            @{data.twitter_username}
          </a>
        </p>
      )}
    </>
  );
}
