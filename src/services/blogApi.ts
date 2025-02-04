export const blogApi = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com${endpoint}`,
    options
  );

  if (!res.ok) {
    throw new Error(`Error fetching ${endpoint}: ${res.statusText}`);
  }

  return res.json();
};
