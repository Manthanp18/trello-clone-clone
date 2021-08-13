import React from "react";

type Handler = () => void;

export const useClickOutSide = (handler: Handler) => {
  const domNode = React.useRef(null);
//   console.log(domNode);

  React.useEffect(() => {
    let maybeHandler = (event: Event) => {
      if (!domNode.current?.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
