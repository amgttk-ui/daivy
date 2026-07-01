import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <select
      value={lang}
      onChange={(e) => {
        console.log("LANG CHANGE:", e.target.value); // 👈 加这个
        changeLanguage(e.target.value);
      }}
    >
      <option value="zh">🇨🇳 中文</option>
      <option value="en">🇺🇸 English</option>
      <option value="vi">🇻🇳 Tiếng Việt</option>
    </select>
  );
}