import RepoCard from "./RepoCard";

export default function Repositories({ repositories }) {
  return (
    <>
      <p>Popular repositories</p>
      <article className="grid grid-cols-auto-fill-300 gap-5 w-[70%] h-[70vh] bg-white p-4">
        {repositories.map((repo) => (
          <RepoCard key={repo.id} repository={repo} />
        ))}
      </article>
    </>
  );
}
