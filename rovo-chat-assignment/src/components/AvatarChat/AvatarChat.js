import React, { Fragment, useState } from 'react';
import ReactAvatar from 'react-avatar';

const AvatarChat = (props) => {
  const {
 src, alt, circle, name 
} = props;

  const avatarName = name
    .split(' ')
    .slice(-2)
    .join(' ');

  return (
    <ReactAvatar
      alt={alt}
      round={circle}
      src=""
      name={avatarName}
      colors={['#089cbf', '#bfda8d']}
      size="38"
    />
  );
};

AvatarChat.defaultProps = {
  alt: 'Avatar Image',
  name: 'Duc Mon',
  src: '/img/avatar.jpg',
  upload: false,
};

export default AvatarChat;
