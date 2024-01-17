import gitOctocat from "../assets/github-octocat-svgrepo-com.svg";
import loader from "../assets/oval.svg";

export default function Home({ load, error }) {
  return (
    <>
      {load ? (
        <div className="flex items-center justify-center">
          <img
            className="w-24 h-24 mt-[50%] ml-[50%]"
            src={loader}
            alt="Loading..."
          />
        </div>
      ) : error ? (
        <section className="flex items-center justify-center">
          <p className="text-4xl text-red-500 font-bold">{error}</p>
        </section>
      ) : (
        <section className="flex items-center justify-center">
          <img
            src={gitOctocat}
            alt="git-octocat"
            className="max-w-full h-auto"
          />
          <article className="flex flex-col whitespace-nowrap">
            <h2 className="text-[3rem] m-0 font-bold leading-[1.1]">
              Search
              <br />
              GitHub Profiles
            </h2>
            <p className="pl-[0.3rem] text-[0.9rem] font-bold mt-0 text-[#919599]">
              You can see the profile data and popular repositories
            </p>
          </article>
        </section>
      )}
    </>
  );
}
