import { useEffect, useState } from "react";
import { token } from "../keys/api_keys";

export function useGetProfiles() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [repositories, setRepositories] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (searchValue) {
      getData(searchValue);
    }
    setSearchValue("");
  };

  const handleInputChange = (e) => setSearchValue(e.target.value);

  const getData = async (searchValue) => {
    try {
      const res = await fetch(`https://api.github.com/users/${searchValue}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        }),
        json = await res.json();

      setData(json);

      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      }
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      setError(`Error ${err.status}: ${message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      const getRepositories = async () => {
        try {
          let res = await fetch(data.repos_url, {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          let json = await res.json();

          const repos = json.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          );

          setRepositories(repos.slice(0, 6));
          setLoading(false);
        } catch (err) {
          let message = err.statusText || "Ocurrió un error";
          setError(`Error ${err.status}: ${message}`);
          setLoading(false);
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
    handleInputChange,
    handleSubmit,
  };
}
