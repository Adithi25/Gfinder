import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RepoList from "./RepoList";

const UserDetail = (props) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const params = useParams();

  const getDetails = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`);
    setUser(res.data);
  };

  const getRepo = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=asc`
    );
    setRepos(res.data);
  };

  useEffect(() => {
    getDetails(params.anything);
    getRepo(params.anything);
  }, []);
  return (
    <>
      <Link to="/" className="btn btn-dark">
        Back to search
      </Link>
      Hireable:
      {user.hireable ? (
        <i className="fa fa-check text-success" />
      ) : (
        <i className="fa fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all center">
          <img
            src={user.avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{user.name}</h1>
          <p>Location:{user.location}</p>
        </div>
        <div>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user.html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {user.company && (
                <>
                  <strong>Company:{user.company}</strong>
                </>
              )}
            </li>
            <li>
              {user.blog && (
                <>
                  <strong>Website:{user.blog}</strong>
                </>
              )}
            </li>
            <li>
              {user.login && (
                <>
                  <strong>{user.login}</strong>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers:{user.followers}</div>
        <div className="badge badge-success">Following:{user.following}</div>
        <div className="badge badge-danger">
          Public Repos:{user.public_repos}
        </div>
        <div className="badge badge-dark">public Gists:{user.public_gists}</div>
      </div>
      <RepoList repos={repos} />
    </>
  );
};

export default UserDetail;
