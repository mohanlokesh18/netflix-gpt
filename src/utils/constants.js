export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://timbrit-produccion.s3.amazonaws.com/profile/avatar_09.jpg";

export const BG_URL =
  "https://ty-netflix-clone.fly.dev/static/media/netflixHKbg.7c15980c902298100abb.jpeg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
