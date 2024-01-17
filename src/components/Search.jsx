import { useGetProfiles } from "../hooks/useGetProfiles";
import Header from "./Header";
import InputSearch from "./InputSearch";
import Profile from "./Profile";
import Home from "./Home";
import Repositories from "./Repositories";

export default function Search() {
  const {
    data,
    error,
    loading,
    searchValue,
    repositories,
    handleInputChange,
    handleSubmit,
  } = useGetProfiles();

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-[25vh] bg-black">
        <Header />
        <InputSearch
          onSubmit={handleSubmit}
          searchValue={searchValue}
          onChange={handleInputChange}
        />
      </section>

      <section
        className={`flex ${
          !data ? "justify-center items-center" : ""
        } w-full h-[70vh]`}
      >
        {data ? (
          <>
            <Profile data={data} />
            {repositories && <Repositories repositories={repositories} />}
          </>
        ) : (
          <Home load={loading} error={error} />
        )}
      </section>
    </>
  );
}
