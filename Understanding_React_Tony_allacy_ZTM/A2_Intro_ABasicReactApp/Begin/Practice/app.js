const { useState } = React;

function ReusableCounter({ label }) {
  const [count, setCount] = useState(0);

  return React.createElement(
    'div',
    {
      style: {
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '0.5rem',
        display: 'inline-block',
        minWidth: '180px',
        textAlign: 'center',
      },
    },
    React.createElement('h2', null, label),
    React.createElement('p', null, `Count: ${count}`),
    React.createElement(
      'div',
      { style: { marginTop: '0.75rem' } },
      React.createElement(
        'button',
        { onClick: () => setCount(count + 1) },
        'Increase'
      ),
      React.createElement(
        'button',
        { onClick: () => setCount(count - 1), style: { marginLeft: '0.5rem' } },
        'Decrease'
      ),
      React.createElement(
        'button',
        { onClick: () => setCount(0), style: { marginLeft: '0.5rem' } },
        'Reset'
      )
    )
  );
}

function App() {
  return React.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' } },
    React.createElement(ReusableCounter, { label: 'One Counter' }),
    React.createElement(ReusableCounter, { label: 'Two Counter' })
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(React.createElement(App));
} else {
  console.error('Could not find root element to render React app.');
}
