import * as React from 'react'

const useMousePosition = () => {

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const updateMousePosition = (ev: any) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;