const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const validateCustomer = async (customer) => {
  const res = await fetch(`${BASE_URL}/validate?customer=${encodeURIComponent(customer)}`);
  return res.json();
};

export const saveConversation = async (data) => {
  const res = await fetch(`${BASE_URL}/save`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};
