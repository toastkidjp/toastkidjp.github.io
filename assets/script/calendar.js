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
const week = [ 0, 1, 2, 3, 4, 5, 6 ];

function makeMonth(today) {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    let hasStarted1 = false;
    let current1 = firstDay;
    const weeks = [];
    for (let i = 0; i < 5; i++) {
        const w = [];
        week.forEach((dayOfWeek) => {
            if (!hasStarted1 && dayOfWeek !== firstDay.getDay()) {
                w.push(-1);
                return;
            }
            hasStarted1 = true;

            if (today.getMonth() !== current1.getMonth()) {
                w.push(-1);
            } else {
                w.push(current1.getDate());
            }
            current1.setDate(current1.getDate() + 1);
        });
        if (w.some((n) => n !== -1)) {
            weeks.push(w);
        }
    }
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      weeks: weeks,
    };
}

function toCalendarClass(dayOfWeek) {
  switch (dayOfWeek) {
    case 0:
      return " class='calendarCell sunday'";
    case 6:
      return " class='calendarCell saturday'";
    default:
      return " class='calendarCell'";
  }
}

const today = new Date();

function selectMonth(month) {
  today.setMonth(month - 1);
  move(today);
}

function moveToPrevious() {
  today.setMonth(today.getMonth() - 1);
  move(today);
}

function moveToNext() {
  today.setMonth(today.getMonth() + 1);
  move(today);
}

function move(today) {
  const nextMonth = makeMonth(today);
  document.getElementById("calendar").innerHTML = generateNewHtml(nextMonth);
}

function generateNewHtml(month) {
  document.getElementById('calendarLabel').textContent = month.year;
  const monthSelector = document.getElementById('monthSelector');
  for (let i = 0; i < 12; i++) {
    monthSelector.options[i].selected = i == month.month;
  }

  let calendar = "<table><th class='sunday'>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th class='saturday'>Sat</th>";

  month.weeks.forEach((w) => {
    calendar += "<tr>";
    w.forEach((d, i) => {
      const dateLabel = "<td" + toCalendarClass(i) + ">" + (d === -1 ? "" : d) + "</td>";
      calendar += dateLabel;
    });
    calendar += "</tr>";
  });

  calendar += "</table>";
  return calendar;
}
