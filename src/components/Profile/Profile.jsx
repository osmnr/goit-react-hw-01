import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.container}>
      <div className={css.topSection}>
        <img className={css.profileImage}
          src={props.avatar}
          alt="User avatar"
        />
        <p className={css.userName}>{props.username}</p>
        <p className={css.tag}>@{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.bottomSection}>
        <li className={css.listItems}>
          <span>Followers</span>
          <span className={css.values}>{props.stats.followers}</span>
        </li>
        <li className={css.listItems}>
          <span>Views</span>
          <span className={css.values}>{props.stats.views}</span>
        </li>
        <li className={css.listItems}>
          <span>Likes</span>
          <span className={css.values}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
