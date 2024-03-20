import { useEffect, useState } from "react";

const git_token = import.meta.env.VITE_GIT_TOKEN;

export function useGetProfiles() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [repositories, setRepositories] = useState(null);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\s/.test(searchValue)) setFormError("Whitespace is not allowed.");
    if (searchValue === "") setFormError("The string is empty.");

    if (searchValue && !/\s/.test(searchValue)) {
      setLoading(true);
      getData(searchValue);
      setFormError("");
    }
    setSearchValue("");
  };

  const handleInputChange = (e) => setSearchValue(e.target.value);

  const handleApiError = (err) => {
    setError(
      `Error ${err.status}:
       ${err.statusText ? err.statusText : "An error occurred"}`
    );
    setLoading(false);
  };

  const getData = async (searchValue) => {
    try {
      const res = await fetch(`https://api.github.com/users/${searchValue}`, {
        headers: {
          Authorization: `token ${git_token}`,
        },
      });

      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    if (data) {
      const getRepositories = async () => {
        try {
          let res = await fetch(data.repos_url, {
            headers: {
              Authorization: `token ${git_token}`,
            },
          });

          if (!res.ok) {
            throw { status: res.status, statusText: res.statusText };
          }

          let json = await res.json();
          const repos = json.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          );

          setRepositories(repos.slice(0, 6));
          setLoading(false);
        } catch (err) {
          handleApiError(err);
        }
      };

      getRepositories();
    }
  }, [data]);

  return {
    data,
    error,
    loading,
    searchValue,
    repositories,
    formError,
    handleInputChange,
    handleSubmit,
  };
}
