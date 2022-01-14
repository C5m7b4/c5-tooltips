import { useState, useEffect } from 'react';
import { generateId } from '../utils';

export const useTooltipController = () => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`tooltip-container-${generateId()}`);

  useEffect(() => {
    const div = document.createElement('div');
    div.id = portalId;
    document.getElementsByTagName('body')[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName('body')[0].removeChild(div);
    };
  }, [portalId]);

  return {
    portalId,
    loaded,
  };
};
