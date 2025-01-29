/*
 * Copyright (c) 2025 toastkidjp.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompany this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html.
 */

/**
 * @author toastkidjp
 */
function choose() {
  const text = document.getElementById("candidates").textContent;
  if (!text) {
    document.getElementById("result").innerHTML = "";
    return;
  }
  const lines = text.split("\n").filter((t) => t);
  document.getElementById("result").innerHTML = "<p class='result-text'>" + lines[Math.floor(Math.random() * lines.length)] + "</p>";
}
