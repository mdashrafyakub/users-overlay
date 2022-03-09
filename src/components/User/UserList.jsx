import Card from "../UI/Card";
import Styles from "./UserList.module.css";

function UserList(props) {
  return (
    <Card className={Styles.users}>
      <ul>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.username}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UserList;
