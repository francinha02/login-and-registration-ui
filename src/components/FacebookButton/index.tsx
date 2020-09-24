import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";

import { Facebook } from "./styles";

interface FacebookButtonProps {
  title: string;
}

const FacebookButton: React.FC<FacebookButtonProps> = (props) => {
  return (
    <IconContext.Provider value={{style: {
      marginRight: '1.6rem',
      verticalAlign: 'bottom'
    }, size: '2.4rem'}}>
      <Facebook>
        <FaFacebook />
        {props.title}
      </Facebook>
    </IconContext.Provider>
  );
};

export default FacebookButton;
