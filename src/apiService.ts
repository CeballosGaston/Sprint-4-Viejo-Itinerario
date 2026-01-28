

export async function fetchApi<T>(
  url: string,
  headers?: HeadersInit
): Promise<T> {
  const response = await fetch(url, {
    ...(headers && { headers }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}
