import express from 'express';
import cors from 'cors';
import sheets, { SPREADSHEET_ID } from './googleSheets.js';

console.log("Starting backend...");

const app = express();

const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({ origin: allowedOrigin }));

app.use(express.json());

app.get('/validate', async (req, res) => {
  const { customer } = req.query;

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Customers!A:B'
  });

  const search = customer.trim().toLowerCase();
  const exists = (data.data.values || []).some(row =>
    row.some(cell => String(cell).trim().toLowerCase() === search)
  );

  res.json({ exists });
});

app.post('/save', async (req, res) => {
  const { customer, notes, tags, outcome } = req.body;

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Logs!A:E',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[customer, notes, tags.join(','), outcome, new Date()]]
    }
  });

  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
