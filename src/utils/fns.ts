export function extractType(node: unknown): Function | string {
  return (node as unknown as React.ReactElement).type;
}

export function extractDisplayName(type: React.FunctionComponent): string {
  return type.displayName || type.name || 'Unknown';
}

export function hasTooltip(element: JSX.Element): boolean {
  return 'tool-tip' in element.props;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36);
}
