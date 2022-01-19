import React, { useState, useEffect } from 'react';
import { extractType, hasTooltip } from '../../utils';
import { useTooltipController } from '../../hooks';
import { Portal } from '../../components';
import { ControllerProps, Coords } from '../../interfaces';
import { Tooltip } from '../../components';

const ToolTipController: React.FC<ControllerProps> = ({
  children,
  direction = 'top',
  delay = '400',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { loaded, portalId } = useTooltipController();
  const [contents, setContents] = useState<React.ReactChild>(
    'here is some content'
  );
  const [coords, setCoords] = useState<Coords>({ left: 0, top: 0 });

  useEffect(() => {}, [direction]);

  const open = (e: MouseEvent, value: React.ReactChild) => {
    // @ts-ignore
    const rect = e.target!.getBoundingClientRect();
    let x: number = e.clientX;
    let y: number = e.clientY;
    if (e.view) {
      y = e.clientY + e.view.scrollY;
    }

    switch (direction) {
      case 'top':
        x = e.clientX + 100;
        y = e.clientY - rect.height;
        if (e.view) {
          y = e.clientY - rect.height + e.view.scrollY;
        }
        break;
      case 'bottom':
        x = e.clientX + 100;
        y = e.clientY + rect.height;
        if (e.view) {
          y = e.clientY + rect.height + e.view.scrollY;
        }
        break;
      case 'left':
        x = e.clientX + 100;
        y = e.clientY;
        if (e.view) {
          y = e.clientY + e.view.scrollY;
        }
        break;
      case 'right':
        x = e.clientX + 100;
        y = e.clientY;
        if (e.view) {
          y = e.clientY + e.view.scrollY;
        }
        break;
      default:
      // do nothing
    }
    const c: Coords = {
      left: x,
      top: y,
    };

    setCoords(c);
    setContents(value);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const inputChildren: React.ReactNode = React.Children.map(
    children,
    (child) => {
      const type = extractType(child);
      if (typeof type === 'string') {
        if (hasTooltip(child as JSX.Element)) {
          const childElement: JSX.Element = child as JSX.Element;
          const tooltipValue = childElement.props['tool-tip'];
          return React.cloneElement(child as React.ReactElement, {
            onMouseEnter: (e: MouseEvent) => open(e, tooltipValue),
            onMouseLeave: close,
          });
        } else {
          return React.cloneElement(child as React.ReactElement);
        }
      } else {
        return React.cloneElement(child as React.ReactElement);
      }
    }
  );
  return (
    <React.Fragment>
      {inputChildren}
      {isOpen && loaded && (
        <Portal id={portalId} coords={coords}>
          <Tooltip
            direction={direction}
            content={contents}
            delay={delay as number}
            controlled={true}
          ></Tooltip>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default ToolTipController;
