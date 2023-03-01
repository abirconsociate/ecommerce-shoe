import React from "react";

import "./FooterVideo.js";
import { videoLink } from "../../config/videoLink";
import ReactPlayer from "react-player";

const FooterVideo = () => {
  return <ReactPlayer className=" mt-5" width="100%" url={videoLink.src} />;
};

export default FooterVideo;
