import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  const languages = [
    { code: "zh", label: "🇨🇳 中文" },
    { code: "en", label: "🇺🇸 English" },
    { code: "vi", label: "🇻🇳 Tiếng Việt" }
  ];

  return (
    <div style={{ position: "absolute", top: 20, right: 20 }}>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{
          padding: "6px 10px",
          background: "#111",
          color: "white",
          border: "1px solid #333",
          borderRadius: "6px"
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