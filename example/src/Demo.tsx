import React, { useState } from 'react';
import { ToolTipController, Tooltip } from '../../src';
import { Direction } from '../../src';

import '../../dist/css/c5-tooltip.css';

import './Demo.css';

export const Demo: React.FC = () => {
  const [open, isOpen] = useState(false);
  const [direction, setDirection] = useState<Direction>('top');
  const [delay, setDelay] = useState<number>(400);
  return (
    <div className="main">
      <div className="main-content">
        <div className="main-content-title">Welcome to my tooltips</div>
      </div>
      <div className="content">
        <div className="demo">
          <ul>
            <li>List element-1</li>
            <ToolTipController direction={direction} delay={delay}>
              <li tool-tip="Hello my name is mike">List Element-2</li>
            </ToolTipController>
            <li>List element-3</li>
          </ul>
        </div>

        <div className="normal">
          <h3>Normal tooltip example</h3>
          <Tooltip content="hello" direction="right">
            <button>Im a button</button>
          </Tooltip>
        </div>

        <div className="controls">
          <div>
            <span>
              <label>Top</label>
              <input
                type="radio"
                name="direction"
                checked={direction == 'top'}
                onChange={(e) => setDirection('top')}
              />
            </span>
            <span>
              <label>Bottom</label>
              <input
                type="radio"
                name="direction"
                checked={direction == 'bottom'}
                onChange={(e) => setDirection('bottom')}
              />
            </span>
            <span>
              <label>Left</label>
              <input
                type="radio"
                name="direction"
                checked={direction == 'left'}
                onChange={(e) => setDirection('left')}
              />
            </span>
            <span>
              <label>Right</label>
              <input
                type="radio"
                name="direction"
                checked={direction == 'right'}
                onChange={(e) => setDirection('right')}
              />
            </span>
          </div>
          <div className="delay">
            <label>Delay</label>
            <input
              type="number"
              value={delay}
              onChange={(e) => setDelay(e.target.value as unknown as number)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
