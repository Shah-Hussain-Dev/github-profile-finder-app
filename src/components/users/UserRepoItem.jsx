import React from "react";
import { Card } from "react-bootstrap";
import { FaEye, FaLink } from "react-icons/fa";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
const UserRepoItem = ({ repo }) => {
  const { name, description, html_url, watchers_count } = repo;
  return (
    <div>
      <Card className="repo_cards  mb-3  ">
        <Card.Body>
          <Card.Title>
            <h3 className="text-primary">
              <FaLink />
              <a href={html_url} rel="noreferrer" alt="profile">
                {" "}
                {name}
              </a>
            </h3>
          </Card.Title>
          <Card.Text>
            <p className="text-white">{description}</p>
            <span className="badge badge-primary badge-lg">
              <FaEye className="mr-2" />
              {watchers_count}
            </span>
          </Card.Text>
          <button className="btn  btn-sm text-white btn-outline-primary btn-repo">
            <a href={html_url} rel="noreferrer" alt="profile_url">
              View repo <BsFillBookmarkHeartFill />
            </a>{" "}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserRepoItem;
