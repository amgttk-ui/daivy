import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  const languages = [
    { code: "zh", label: "🇨🇳 中文" },
    { code: "en", label: "🇺🇸 English" },
    { code: "vi", label: "🇻🇳 Tiếng Việt" }
  ];

  return (
    <div style={{
      position: "fixed",
      top: "18px",
      right: "18px",
      zIndex: 99999
    }}>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{
          background: "#111",
          color: "#fff",
          border: "1px solid #333",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
          outline: "none",
          fontSize: "13px"
        }}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}