import { useGetProfiles } from "../hooks/useGetProfiles";
import octocatError from "../assets/constructocat2.jpg";
import Header from "./Header";
import InputSearch from "./InputSearch";
import Profile from "./Profile";
import Home from "./Home";
import Repositories from "./Repositories";
import loader from "../assets/oval.svg";
import Error from "./Error";
import Loader from "./Loader";

export default function Search() {
  const {
    data,
    error,
    loading,
    searchValue,
    repositories,
    formError,
    handleInputChange,
    handleSubmit,
  } = useGetProfiles();

  return (
    <>
      <section className="flex flex-col justify-center items-center w-full h-[28vh] bg-black">
        <Header />
        <InputSearch
          onSubmit={handleSubmit}
          searchValue={searchValue}
          onChange={handleInputChange}
        />
        {formError && (
          <div className="bg-red-500 text-white text-sm mt-2 px-12 rounded-3xl">
            {formError}
          </div>
        )}
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
        ) : error && !formError ? (
          <Error error={error} octocatError={octocatError} />
        ) : loading ? (
          <Loader loader={loader} />
        ) : (
          <>
            <Home load={loading} />
          </>
        )}
      </section>
    </>
  );
}
