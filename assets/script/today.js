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
const monthLabel = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function generateTodayArticleLink() {
const date = new Date();

const link = "https://en.wikipedia.org/wiki/" + monthLabel[date.getMonth()] + "_" + date.getDate();
document.getElementById("link_to_article").innerHTML = "<a href='" + link + "'>Today</a>";
}
