import gitOctocat from "../assets/github-octocat-svgrepo-com.svg";

export default function Home() {
  return (
    <section className="flex items-center justify-center">
      <img src={gitOctocat} alt="git-octocat" className="max-w-full h-auto" />
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
  );
}
