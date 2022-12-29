function debounce<T extends (...args: any[]) => void>(callback: T, delay: number): T {
  let timeoutId: number | undefined;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay) as any;
  }) as T;
}

export default debounce;
