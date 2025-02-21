import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img
          src={props.avatar}
          alt="User avatar"
        />
        <p>{props.username}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.stats.follower}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
