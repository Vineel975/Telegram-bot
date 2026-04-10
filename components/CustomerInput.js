"use client";

export default function CustomerInput({ customer, setCustomer }) {
  return (
    <div className="field-group">
      <label className="field-label">
        Customer ID or Name <span className="required">*</span>
      </label>
      <div className="input-wrap">
        <span className="input-icon">👤</span>
        <input
          className="input"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          placeholder="e.g., CUST-001 or Acme Corp"
        />
      </div>
    </div>
  );
}