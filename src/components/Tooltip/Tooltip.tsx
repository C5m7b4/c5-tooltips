import React, { useState } from 'react';
import { Default } from '../../utils';
import { Direction } from '../../types';

export interface TooltipProps {
  delay?: number;
  children?: React.ReactNode | React.ReactNode[] | string;
  direction: Direction;
  content: React.ReactNode | string;
  controlled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  delay,
  children,
  direction,
  content,
  controlled = false,
}) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={`${Default.CSS_NAMESPACE}-wrapper`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {(active || controlled) && (
        <div className={`${Default.CSS_NAMESPACE}-tip ${direction || 'top'}`}>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.defaultProps = {
  delay: 400,
  direction: 'top',
};

export default Tooltip;
