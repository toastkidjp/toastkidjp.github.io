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

function toCalendarClass(date, holiday) {
  const today = new Date();
  const todayStyleIfNeed = today.getFullYear() === date.getFullYear()
    && today.getMonth() === date.getMonth()
    && today.getDate() === date.getDate()
    ? "today "
    : "";
  if (holiday) {
    return todayStyleIfNeed + "calendarCell sunday";
  }
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
function makeDateCellItem(today, current, candidate) {
  if (today.getFullYear() !== current.getFullYear() || today.getMonth() !== current.getMonth()) {
    return {
      label: "",
      title: undefined,
      holiday: false,
      empty: true,
      style: toCalendarClass(current),
    };
  }

  const title = candidate ? candidate.title : undefined;
  const holiday = candidate ? true : false;

  return {
    label: current.getDate(),
    title: title,
    holiday: holiday,
    empty: false,
    style: toCalendarClass(current, holiday),
  };
}

function makeMonth(today) {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    const holidays = calculateJapaneseHoliday(today);

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

            const candidate = holidays && holidays.find((h) => h.date == currentDate.getDate());
            const dateCell = makeDateCellItem(today, currentDate, candidate);
            w.push(dateCell);

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

const fixedJapaneseHoliday = [
  {
    title: "New year",
    month: 1,
    date: 1,
  },
  {
    title: "National foundation day",
    month: 2,
    date: 11,
  },
  {
    title: "Emperors birthday",
    month: 2,
    date: 23,
  },
  {
    title: "Showa day",
    month: 4,
    date: 29,
  },
  {
    title: "Constitution memorial day",
    month: 5,
    date: 3,
  },
  {
    title: "Green day",
    month: 5,
    date: 4,
  },
  {
    title: "Children's day",
    month: 5,
    date: 5,
  },
  {
    title: "Mountain day",
    month: 8,
    date: 11,
  },
  {
    title: "Culture day",
    month: 11,
    date: 3,
  },
  {
    title: "Labor thanksgiving day",
    month: 11,
    date: 23,
  },
];

const moveableJapaneseHoliday = [
  {
    title: "Coming of age day",
    month: 1,
    week: 2,
  },
  {
    title: "Marine day",
    month: 7,
    week: 3,
  },
  {
    title: "Respect for the aged day",
    month: 9,
    week: 3,
  },
  {
    title: "Sports day",
    month: 10,
    week: 2,
  },
];

function findJapaneseMoveableHolidays(year, month) {
  if (month === 10 && (year == 2020 || year == 2021)) {
    return [];
  }

  if (year === 2019) {
    if (month === 4) {
      return [
        {
          title: "National holiday",
          month: month,
          date: 30,
        }
      ];
    }
    if (month === 5) {
      return [
        {
          title: "National holiday",
          month: month,
          date: 1,
        },
        {
          title: "National holiday",
          month: month,
          date: 2,
        }
      ];
    }
  }

  if (month === 7) {
    const julysHolidays = [];
    julysHolidays.push(
      {
        title: "Marine day",
        month: 7,
        date: year === 2020 ? 23 : year === 2021 ? 22 : calculateDate(year, month, 3),
      },
    );
    if (year == 2020 || year == 2021) {
      julysHolidays.push(
        {
          title: "Sports day",
          month: 7,
          date: year === 2020 ? 24 : 23,
        }
      );
    }
    return julysHolidays;
  }

  const targetDay = moveableJapaneseHoliday.find((holiday) => holiday.month === month);
  if (!targetDay) {
    return [];
  }

  return [
    {
      title: targetDay.title,
      month: month,
      date: calculateDate(year, month, targetDay.week)
    }
  ];
}

function calculateDate(year, month, week) {
  const localDate = new Date(year, month - 1, 1);
  const dayOfWeek = localDate.getDay();

  const d = (dayOfWeek == 1) ? 1 : 0 - (dayOfWeek - 2);

  const offset = (dayOfWeek <= 1) ? 1 : 0;
  return d + (7 * (week - offset))
}

function calculateSubstituteHoliday(year, holiday) {
        if (holiday.month == 5) {
            const calendar = new Date(year, holiday.month - 1, 6)
            if (calendar.getDay() <= 3) {
                return { title: "Substitute holiday", month: holiday.month, date: 6};
            }
        }
      if (new Date(year, holiday.month - 1, holiday.date).getDay() === 0) {
        return {
          title: "Substitute holiday",
          month: holiday.month,
          date: holiday.date + 1,
        };
      }
  return undefined;
}

function calculateJapaneseHoliday(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  if (month == 6) {
    return [];
  }

  const holidays = [];

  const fixedMonths = fixedJapaneseHoliday.map((fixed) => fixed.month);
  fixedJapaneseHoliday.filter((fixed) => fixed.month == month)
    .forEach((fixed) => {
      holidays.push(fixed);
      const substitute = calculateSubstituteHoliday(year, fixed);
      if (substitute) {
        holidays.push(substitute);
      }
    });

  const moveableHolidays = findJapaneseMoveableHolidays(date.getFullYear(), month);
  if (moveableHolidays) {
    moveableHolidays.forEach((h) => holidays.push(h));
  }

  return holidays;
}
