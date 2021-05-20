import React from 'react'

export default function usePersistantState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue !== null
      ? JSON.parse(storedValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}