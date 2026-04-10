"use client";

const TAG_META = {
  "Hot Lead":       { icon: "🔥" },
  "Decision Maker": { icon: "🎯" },
  "Budget":         { icon: "💰" },
  "Urgent":         { icon: "⚡" },
};

export default function Tags({ tags, setTags }) {
  const toggle = (tag) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="field-group">
      <label className="field-label">Labels</label>
      <div className="tags-grid">
        {Object.entries(TAG_META).map(([tag, { icon }]) => (
          <div
            key={tag}
            data-key={tag}
            className={`tag${tags.includes(tag) ? " active" : ""}`}
            onClick={() => toggle(tag)}
          >
            <span className="tag-icon">{icon}</span>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
