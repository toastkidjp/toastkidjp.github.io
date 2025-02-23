/*
 * Copyright (c) 2025 toastkidjp.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompany this distribution.
 * The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html.
 */

const week = [ 0, 1, 2, 3, 4, 5, 6 ];

const monthLabels = [
  "1 (Jan)",
  "2 (Feb)",
  "3 (Mar)",
  "4 (Apr)",
  "5 (May)",
  "6 (Jun)",
  "7 (Jul)",
  "8 (Aug)",
  "9 (Sep)",
  "10 (Oct)",
  "11 (Nov)",
  "12 (Dec)"
];

const tableHeader = "<th class='sunday'>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>";

function toCalendarClass(date) {
  const today = new Date();
  const todayStyleIfNeed = today.getFullYear() === date.getFullYear()
    && today.getMonth() === date.getMonth()
    && today.getDate() === date.getDate()
    ? "today "
    : "";
  switch (date.getDay()) {
    case 0:
      return todayStyleIfNeed + "calendarCell sunday";
    case 6:
      return todayStyleIfNeed + "calendarCell saturday";
    default:
      return todayStyleIfNeed + "calendarCell";
  }
}

/**
 * @author toastkidjp
 */
function makeDateCellItem(today, current) {
  if (today.getFullYear() !== current.getFullYear() || today.getMonth() !== current.getMonth()) {
    return {
      label: "",
      empty: true,
      style: toCalendarClass(current),
    };
  }

  return {
    label: current.getDate(),
    empty: false,
    style: toCalendarClass(current),
  };
}

function makeMonth(today) {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    let hasStarted1 = false;
    let currentDate = firstDay;
    const weeks = [];
    for (let i = 0; i <= 5; i++) {
        const w = [];
        week.forEach((dayOfWeek) => {
            if (!hasStarted1 && dayOfWeek !== firstDay.getDay()) {
                w.push(makeDateCellItem(today, new Date(0)));
                return;
            }
            hasStarted1 = true;

            w.push(makeDateCellItem(today, currentDate));

            currentDate.setDate(currentDate.getDate() + 1);
        });
        if (w.some((n) => !n.empty)) {
            weeks.push(w);
        }
    }
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      weeks: weeks,
    };
}

const today = new Date();

function selectYear(yearInput) {
  try {
    const year = parseInt(yearInput);
    today.setFullYear(year);
    move(today);
  } catch (e) {
    console.log(e);
  }
}

function selectMonth(month) {
  today.setMonth(month);
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
  document.getElementById('yearInput').value = month.year;

  const monthSelector = document.getElementById('monthSelectorLabel');
  monthSelector.value = monthLabels[month.month];

  let calendar = "<table>" + tableHeader;

  month.weeks.forEach((w) => {
    calendar += "<tr>";
    w.forEach((d, i) => {
      const dateCell = "<td class='" + d.style + "'>" + d.label + "</td>";
      calendar += dateCell;
    });
    calendar += "</tr>";
  });

  calendar += "</table>";
  return calendar;
}
