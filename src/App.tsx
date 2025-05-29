import React, { useState } from "react";
import CodeEditor from "./components/admin/CodeEditor";
import TokenOutput from "./components/admin/TokenOutput";
import { tokenize } from "./lib/lexer";
import { FaCode } from "react-icons/fa"; // code icon from react-icon library
import ThemeToggle from "./components/admin/ThemeToggle";
import LanguageSelector from "./components/admin/Selector";


export default function App() {
  const [code, setCode] = useState("");
  const tokens = tokenize(code);
   const [lang, setLanguage] = useState("cpp");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradientFrom via-background to-gradientTo text-text font-sans px-5 py-10 flex flex-col items-center">
      <div className="absolute top-5 right-5 z-50">
        <ThemeToggle />
        
      </div>

      <div className="max-w-4xl w-full space-y-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2 text-white">
            <FaCode /> Lexical Analyzer Pro
          </h1>
          <p className="text-white mt-2">
            Modern UI + Token Highlighting + Editor
          </p>
        </header>
        <div className="flex justify-center">
          <LanguageSelector setLanguage={setLanguage} />
        </div>
        <CodeEditor code={code} onChange={setCode} language={lang} />
        <TokenOutput tokens={tokens} />
      </div>
    </div>
  );
}
