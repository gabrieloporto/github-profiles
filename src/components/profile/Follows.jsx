import { formatNumberWithK } from "../../logic";
import { FollowersIcon } from "../Icons";

export default function Follows({ data }) {
  return (
    <p
      className={`${
        data.followers > 0 || data.following > 0 ? "flex" : "hidden"
      } gap-1 my-[1.2rem] text-[#63676b] text-[0.8rem]`}
    >
      <FollowersIcon />
      <span className="text-[0.8rem] text-black">
        {data.followers >= 0 && formatNumberWithK(data.followers)}
      </span>
      followers -
      <span className="text-[0.8rem] text-black">
        {data.following >= 0 && formatNumberWithK(data.following)}
      </span>
      following
    </p>
  );
}
