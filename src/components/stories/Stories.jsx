import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Ali",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Ali",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Ali",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Ali",
      img: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
