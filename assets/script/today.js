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

  const title = monthLabel[date.getMonth()] + "_" + date.getDate();
  const link = "https://en.wikipedia.org/wiki/" + title;
  return "<h3>What day is it?</h3><a href='" + link + "'>" + title + " (Wikipedia)</a>";
}
