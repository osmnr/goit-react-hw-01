import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={styles['profile-container']}>
        <img
          src={props.avatar}
          alt="User avatar"
        />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
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
