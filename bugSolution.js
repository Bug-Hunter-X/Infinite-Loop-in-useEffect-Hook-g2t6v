```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Functional update prevents infinite loop
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```