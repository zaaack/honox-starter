import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./i18n";

export function renderAdmin(id: string) {
  const container = document.getElementById(id) as HTMLElement
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </React.StrictMode>
  )

};
