export async function loadYML() {
  const res = await fetch('./op.yml');
  const text = await res.text();

  const lines = text.split('\n');
  const data = {};

  for (const line of lines) {
    if (line.includes(':')) {
      const [key, value] = line.split(':').map(s => s.trim());
      data[key] = value;
    }
  }

  return data;
}

