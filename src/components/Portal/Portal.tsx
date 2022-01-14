import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Coords } from '../../interfaces';

export interface PortalProps {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  coords: Coords;
}

const Portal: React.FC<PortalProps> = ({ children, id, coords }) => {
  const mount = document.getElementById(id);
  const el = document.createElement('div');
  el.setAttribute(
    'style',
    `position: absolute; width: 200px; transform: translate(-100px, -100%); top:${coords.top}px; left: ${coords.left}px`
  );

  // @ts-ignore
  useEffect(() => {
    mount?.appendChild(el);

    return () => mount?.removeChild(el);
  }, [mount, el]);

  return createPortal(children, el);
};

export default Portal;
