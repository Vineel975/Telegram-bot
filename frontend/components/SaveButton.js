"use client";
import { validateCustomer, saveConversation } from "../services/api";
import { useState } from "react";

export default function SaveButton({ customer, notes, tags, outcome, onSaveSuccess }) {
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const save = async () => {
    if (!customer.trim()) {
      showToast("Customer name is required", "error");
      return;
    }

    setSaving(true);
    try {
      // Validate first, then save only if found
      const { exists } = await validateCustomer(customer);
      if (!exists) {
        showToast("Customer not found. Please check the name.", "error");
        return;
      }

      await saveConversation({ customer, notes, tags, outcome });
      showToast("Conversation saved!", "success");
      onSaveSuccess();
    } catch {
      showToast("Something went wrong. Try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="save-wrap">
        <button className="save" onClick={save} disabled={saving}>
          {saving ? "⏳ Saving…" : "💾 Save Conversation"}
        </button>
      </div>
      {toast && (
        <div className="toast-wrap">
          <div className={`toast ${toast.type}`}>{toast.msg}</div>
        </div>
      )}
    </>
  );
}