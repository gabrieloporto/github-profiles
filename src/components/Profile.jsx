import City from "./profile/City";
import Data from "./profile/Data";
import Email from "./profile/Emaill";
import Follows from "./profile/Follows";
import Twitter from "./profile/Twitter";
import Website from "./profile/Website";

export default function Profile({ data }) {
  return (
    <article className="text-left w-[30%] h-[70vh] bg-white pl-4 mb-4">
      <Data data={data} />
      <Follows data={data} />
      <City data={data} />
      <Email data={data} />
      <Website data={data} />
      <Twitter data={data} />
      <br />
    </article>
  );
}
