import { useParams } from "react-router-dom";

const data = {
  rudsa: {
    name: "김상경",
    description: "lol 브론즈 티어",
  },
  velopert: {
    name: "김민준",
    description: "React 선생님",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>Don't Find User</p>
      )}
    </div>
  );
};

export default Profile;
