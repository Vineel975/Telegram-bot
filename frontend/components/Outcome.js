"use client";

export default function Outcome({ outcome, setOutcome }) {
  return (
    <div className="field-group">
      <label className="field-label">
        Outcome <span className="required">*</span>
      </label>
      <div className="outcome-select-wrap">
        <select
          className="select"
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
        >
          <option value="">Select outcome…</option>
          <option value="Purchased">✅ Purchased</option>
          <option value="Not Purchased">❌ Not Purchased</option>
          <option value="Follow Up">🔄 Follow Up</option>
          <option value="No Answer">📵 No Answer</option>
        </select>
        <span className="chevron">▼</span>
      </div>
    </div>
  );
}
