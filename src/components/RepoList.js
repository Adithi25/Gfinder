import React from "react";
import Repo from "./Repo";

const RepoList = (props) => {
  return <div>{props && props.repos.map((repo) => <Repo repo={repo} />)}</div>;
};

export default RepoList;
