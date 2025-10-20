import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to={"/settings"}>
        <h1>Settings</h1>
      </Link>
    </div>
  );
}

export default Profile;
