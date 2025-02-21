import css from "./FriendList.module.css";

const FriendList = (props) => {
  return (
    <>
      <ul>
        {/* li sayısı, dizideki nesne sayısına bağlıdır */}
        <li>
          <FriendListItem/>
        </li>
      </ul>
    </>
  );
};


export default FriendList;


const FriendListItem = (props) => {
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p>{props.name}</p>
      <p>{props.isOnline}</p>
    </div>
  );
};