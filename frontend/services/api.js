export const validateCustomer = async (customer) => {
  const res = await fetch(`http://localhost:5000/validate?customer=${customer}`);
  return res.json();
};

export const saveConversation = async (data) => {
  const res = await fetch(`http://localhost:5000/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
};
