import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Comments = ({
  commentId,
  authorDisplayName,
  authorProfileImageUrl,
  textDisplay,
  publishedTimeText,
  likesCount,
  replyCount,
}) => {
  return (
    <div className="hidden md:block">
      <div key={commentId} className="flex space-x-3 mx-3 md:mx-0 my-3 ">
        <img
          className="w-10 h-10 rounded-full"
          src={authorProfileImageUrl}
          alt="authorProfileImage"
        />

        <div className="flex flex-col ">
          <div className="flex space-x-2">
            <p className="font-bold text-sm">{authorDisplayName}</p>
            <p className="text-gray-500 text-sm">{publishedTimeText}</p>
          </div>
          <p className="font-semibold">{textDisplay}</p>
          <div className="flex space-x-2 my-2">
            <AiOutlineLike className="w-5 h-5" />
            {likesCount !== 0 && <p className="text-sm">{likesCount}</p>}
            <AiOutlineDislike className="w-5 h-5" />
          </div>
          {replyCount !== 0 && (
            <p className="text-blue-500 cursor-pointer font-bold">
              {replyCount} replies
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
