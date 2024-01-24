import React from "react";
import NoProfile from "../../assets/images/message/groupiconwhite.png";
import { BiBadgeCheck } from "react-icons/bi";

const ChatSnippet = ({ profileImage, name, designation, onClick}) => {
  const displayImage = profileImage || NoProfile;
  const handleChatClick = () => {
    onClick(name);
  };
  return (
    <div className="flex items-center mb-1 p-4 border-b rounded border-gray-300 hover:bg-gray-100 cursor-pointer"
    onClick={handleChatClick}>
      <img
        src={displayImage}
        alt={NoProfile}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <div className="flex">
          <BiBadgeCheck className="ml-1 text-green-500" />
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatSnippet;