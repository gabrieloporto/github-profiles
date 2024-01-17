import { GithubIcon } from "./Icons";

export default function Header() {
  return (
    <header
      className="flex justify-center items-center cursor-pointer"
      onClick={() => location.reload()}
    >
      <GithubIcon />
      <h1 className="text-[2rem] m-0 ml-4 text-white font-bold">
        Github Profiles
      </h1>
    </header>
  );
}
