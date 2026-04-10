"use client";

import { useState } from "react";
import Header from "../components/Header";
import CustomerInput from "../components/CustomerInput";
import VoiceRecorder from "../components/VoiceRecorder";
import Tags from "../components/Tags";
import Outcome from "../components/Outcome";
import SaveButton from "../components/SaveButton";

export default function Page() {
  const [customer, setCustomer] = useState("");
  const [notes, setNotes] = useState("");
  const [tags, setTags] = useState([]);
  const [outcome, setOutcome] = useState("");

  const resetAll = () => {
    setCustomer("");
    setNotes("");
    setTags([]);
    setOutcome("");
  };

  return (
    <div className="screen">
      <div className="card">
        <Header />
        <div className="content">
          <CustomerInput customer={customer} setCustomer={setCustomer} />
          <VoiceRecorder notes={notes} setNotes={setNotes} />
          <Tags tags={tags} setTags={setTags} />
          <Outcome outcome={outcome} setOutcome={setOutcome} />
        </div>
        <SaveButton
          customer={customer}
          notes={notes}
          tags={tags}
          outcome={outcome}
          onSaveSuccess={resetAll}
        />
      </div>
    </div>
  );
}