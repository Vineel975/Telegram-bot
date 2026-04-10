"use client";
import { useState, useRef } from "react";

export default function VoiceRecorder({ notes, setNotes }) {
  const [recording, setRecording] = useState(false);
  const recRef = useRef(null);

  const stop = () => {
    if (recRef.current) {
      recRef.current.stop();
      recRef.current = null;
    }
    setRecording(false);
  };

  const start = () => {
    // If already recording, stop it
    if (recording) {
      stop();
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome.");
      return;
    }

    const rec = new SpeechRecognition();
    rec.lang = "en-US";
    rec.continuous = true;        // keep listening until manually stopped
    rec.interimResults = true;    // show words as they're being spoken

    rec.onstart = () => setRecording(true);

    rec.onresult = (e) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          const transcript = e.results[i][0].transcript.trim();
          setNotes(prev => (prev ? prev + " " + transcript : transcript));
        }
      }
    };

    rec.onerror = (e) => {
      console.error("Speech error:", e.error);
      stop();
    };

    rec.onend = () => {
      setRecording(false);
      recRef.current = null;
    };

    recRef.current = rec;
    rec.start();
  };

  return (
    <div className="field-group">
      <label className="field-label">Voice or Notes</label>
      <div className="mic-section">
        <button
          className={`mic-btn${recording ? " recording" : ""}`}
          onClick={start}
        >
          {recording ? "⏹️" : "🎤"}
        </button>
        <span className={`mic-label${recording ? " recording" : ""}`}>
          {recording ? "Listening… tap to stop" : "Tap to speak"}
        </span>
        <textarea
          className="notes-textarea"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Speak or type conversation notes here..."
          rows={3}
        />
      </div>
    </div>
  );
}