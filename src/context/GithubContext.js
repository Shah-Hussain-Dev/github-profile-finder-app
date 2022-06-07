import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

export const GithubProvider = ({ children }) => {
  // usereducer
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // search the data from api
  const fetchUsers = async (text) => {
    const params = new URLSearchParams({ q: text });
    setLoading();
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    dispatch({ type: "GET_USERS", payload: items });
  };

  // get single data
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = "/notFound";
    } else {
      const data = await response.json();
      dispatch({ type: "GET_USER", payload: data });
    }
  };

  // get user repos data
  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({ sort: "created", per_page: 10 });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    dispatch({ type: "GET_REPOS", payload: data });
  };

  // set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        fetchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
