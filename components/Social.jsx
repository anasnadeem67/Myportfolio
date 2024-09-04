'use client';
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiYoutubeFill
} from 'react-icons/ri';

import Link from 'next/link';


const icons = [
  {
    path: 'https://www.linkedin.com/in/anasnadeem/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/anasnadeem67',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/anasnadeem67/?locale=he_IL',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.youtube.com/channel/UClMCJOXCttNwFMqDZNb7Wew',
    name: <RiYoutubeFill />,
  },
];

const Social = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=> {
        return (
        <Link href={icon.path} key={index}>
        <div className={`${iconsStyles}`}>{icon.name}</div></Link>
      );
    })}
    </div>
  );
};

export default Social
