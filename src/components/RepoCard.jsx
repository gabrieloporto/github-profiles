// RepoCard.jsx
import { ForkIcon, StarIcon } from "./Icons";

export default function RepoCard({ repository }) {
  return (
    <section className="flex flex-col bg-white p-[1.2rem] border-[1px] border-solid border-[#b3b7bb] rounded-[6px] shadow-repo">
      <article className="flex justify-between">
        <a
          className="text-[#367ad3] flex-row font-[600] mb-4 hover:underline"
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {repository.name}
        </a>
        <div className="w-12 h-[1.2rem] flex items-center justify-center text-center text-[0.75rem] font-semibold text-[#656d76] border-[1px] border-solid border-x-[#cfd1d3] border-y-[#c7c9cc] rounded-[2rem]">
          Public
        </div>
      </article>
      <small className="text-[#656d76] mb-4 empty:mb-8">
        {repository.description}
      </small>
      <p className="flex gap-4 text-sm my-2">
        {repository.language && <span>{repository.language}</span>}
        {repository.stargazers_count > 0 && (
          <span className="flex items-center justify-center gap-1">
            <StarIcon />
            {repository.stargazers_count}
          </span>
        )}
        {repository.forks > 0 && (
          <span className="flex items-center justify-center gap-1">
            <ForkIcon />
            {repository.forks}
          </span>
        )}
      </p>
    </section>
  );
}
