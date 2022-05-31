import { useEffect, useContext } from "react";
import { Badge, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import GithubContext from "../../context/GithubContext";
import Spinner from "../Spinner";
import UserRepos from "./UserRepos";
import { ImLocation } from "react-icons/im";
import { GoGlobe } from "react-icons/go";
import { IoLogoTwitter } from "react-icons/io";
import { FaUsers, FaCodepen } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

const User = () => {
  const params = useParams();
  const { user, getUser, loading, repos, getUserRepos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, [getUser, getUserRepos, params.login]);

  if (loading) {
    <Spinner />;
  }

  return (
    <Container>
      <Row>
        <div class="container">
          <Row class="mb-3">
            <div class="col-md-12 shadow-lg user_profile_container">
              <div class="d-flex flex-row user_section  py-4 px-3 rounded">
                <div class="p-0  image_profile ">
                  <img
                    src={user.avatar_url}
                    alt="images"
                    class="img-fluid text-center mx-auto  rounded"
                    width="320"
                  />
                </div>
                <div className="d-flex flex-column align-items-start ml-3 pb-5">
                  <div class="pl-3 pt-2 pr-2 pb-2 ">
                    <h3 className="text-primary  ">
                      {user.name}
                      <span>
                        <Badge
                          pill
                          bg="primary"
                          className="text-white ml-2 mb-2"
                          style={{ fontSize: "12px" }}
                        >
                          {user.type}{" "}
                        </Badge>
                      </span>
                      {user.hireable && (
                        <span>
                          <Badge
                            pill
                            bg="success"
                            className="text-white ml-2 mb-2"
                            style={{ fontSize: "12px" }}
                          >
                            Hireable
                          </Badge>
                        </span>
                      )}{" "}
                    </h3>
                    <p className="text-white text-left">{user.bio}</p>
                  </div>
                  <div>
                    <a
                      href={user.html_url}
                      rel="noreferrer"
                      target="_blank"
                      alt={user.html_url}
                      className="btn btn-outline-primary   ml-3"
                    >
                      View Profile
                    </a>
                  </div>
                  <div className="links ml-3 d-flex justify-content-between flex-wrap w-100 ">
                    {user.location && (
                      <div className="glass-container text-center mt-3 px-4 py-2">
                        <span className="text-white">
                          <ImLocation className="text-white mr-1" />
                          Location
                        </span>
                        <br></br>
                        <span>{user.location}</span>
                      </div>
                    )}
                    {user.blog && (
                      <div className="glass-container text-center mt-3  px-3  py-2">
                        <span>
                          <GoGlobe className="text-white mr-1" />
                          Website
                        </span>
                        <br></br>
                        <span>
                          <a
                            href={`https://${user.blog}`}
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                            alt="user_blog"
                          >
                            {user.blog}
                          </a>
                        </span>
                      </div>
                    )}
                    {user.twitter_username && (
                      <div className="glass-container text-center mt-3  px-3 py-2">
                        <span>
                          <IoLogoTwitter className="text-white mr-1" />
                          Twitter
                        </span>
                        <br></br>
                        <span>
                          <a
                            href={`https://twiter.com/${user.twitter_username}`}
                            className="text-white"
                            target="_blank"
                            rel="noreferrer"
                            alt="user_twitter"
                          >
                            {user.twitter_username}
                          </a>
                        </span>
                      </div>
                    )}{" "}
                  </div>
                </div>
              </div>
            </div>
          </Row>

          <Row className="mb-3">
            <div className="d-flex flex-column w-100  align-items-center justify-content-center  pb-4 ">
              <div className="links ml-3 d-flex justify-content-between flex-wrap w-100 ">
                {user.following && (
                  <div className="glass-container d-flex github_stats align-items-center justify-content-between  text-center mt-3  px-3  py-2">
                    <div>
                      <span>Followings</span>
                      <br></br>
                      <span className="github_stats_data">
                        {user.following}
                      </span>
                    </div>
                    <div>
                      <FaUsers className=" icons mr-1" />
                    </div>
                  </div>
                )}
                {user.followers && (
                  <div className="glass-container d-flex github_stats align-items-center justify-content-between  text-center mt-3  px-3  py-2">
                    <div>
                      <span>Followers</span>
                      <br></br>
                      <span className="github_stats_data">
                        {user.followers}
                      </span>
                    </div>
                    <div>
                      <ImUsers className=" icons mr-1" />
                    </div>
                  </div>
                )}
                {user.public_repos && (
                  <div className="glass-container github_stats justify-content-between align-items-center  d-flex  text-center mt-3  px-3 py-2">
                    <div>
                      <span>Public Repos</span>
                      <br></br>
                      <span className="github_stats_data">
                        {user.public_repos}
                      </span>
                    </div>
                    <div>
                      <FaCodepen className=" icons mr-1" />
                    </div>
                  </div>
                )}{" "}
              </div>
            </div>
          </Row>
          <Row>
            <UserRepos repos={repos} />
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default User;
