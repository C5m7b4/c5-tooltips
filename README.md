# Tooltip Library

This is a small tooltip utility

To install

```js
  npm install c5-tooltips
```

usage:

```js
<ToolTipController>
  <button tool-tip="Here is my tooltip">Click me</button>
</ToolTipController>
```

Directions: top, bottom, right, left;
right now, this is only scanning top level components. Children will not currenly be visible to the
ToolTipController. Here are some optional props:

```js
<ToolTipController direction="bottom">
  <p>This paragraph does not have a tooltip</p>
  <button>No Tooltip</button>
  <button tool-tip="This button has a tooltip">Click Me</button>
</ToolTipController>
```

So, basically just wrap some components in a ToolTipController and for any element
that you want to have a tool-tip, just add the attribute "tool-tip" and the ToolTipController
will make a tooltip available to you. You can also add Components as tooltips:

```js
const ComplexComponent = () => {
  return (
    <div style={{ borderRadius: '10px' }}>
      <div
        style={{
          borderBottom: '2px solid black',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Title
      </div>
      <div>Here is the body of my tooltip</div>
    </div>
  );
};

<ToolTipController>
  <div tool-tip={<ComplexComponent />}>
    This div should show a complex component
  </div>
</ToolTipController>;
```
