import { useEffect, useState } from "react";

export const useMedia = (stringQueryValue) => {
  const [match, setMatch] = useState();

  useEffect(() => {
    let isMounted = true;

    const matchMedia = window.matchMedia(stringQueryValue);
    const handleChange = () => {
      if (!isMounted) {
        return;
      }
      setMatch(Boolean(matchMedia.matches));
    };
    // add a lister to browser
    matchMedia.addEventListener("change", handleChange);

    setMatch(!!matchMedia.matches);

    // cleanup
    return () => {
      isMounted = false;
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [stringQueryValue]);
  return match;
};
