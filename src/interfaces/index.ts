import { Direction } from '../types';

export interface ControllerProps {
  children: React.ReactNode | React.ReactNode[];
  direction?: Direction;
  delay?: number;
}

export interface Coords {
  left: number;
  top: number;
}
