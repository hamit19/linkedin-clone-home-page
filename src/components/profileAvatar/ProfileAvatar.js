import React, { useState } from "react";
import ProfileOption from "../profileOptions/ProfileOption";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../../firebase/FirebaseConfig";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./ProfileAvatar.css";
import HeaderOption from "../headerOption/HeaderOption";

const ProfileAvatar = () => {
  const [showOption, setShowOption] = useState(false);

  const onClickHandler = (e) => {
    e.stopPropagation();
    setShowOption(!showOption);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutUser = () => {
    auth.signOut();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="profile-wrapper">
      <HeaderOption avatar={true} title="me" onClick={onClickHandler} />
      {showOption && (
        <div className="profileOption__wrapper">
          <ProfileOption
            Icon={ExitToAppIcon}
            color="gray"
            title="Log out"
            onClick={logoutUser}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
