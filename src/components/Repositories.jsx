import RepoCard from "./RepoCard";

export default function Repositories({ repositories }) {
  return (
    <article className="grid grid-cols-auto-fill-300 gap-5 w-[70%] h-[70vh] bg-white p-4">
      <p>Popular repositories</p>
      <br />
      {repositories.map((repo) => (
        <RepoCard key={repo.id} repository={repo} />
      ))}
    </article>
  );
}
