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
const timezones = [
  { name: "NZ", icon: "\uD83C\uDDF3\uD83C\uDDFF" },
  { name: "Australia/Sydney", icon: "\uD83C\uDDE6\uD83C\uDDFA" },
  { name: "Asia/Tokyo", icon: "\uD83C\uDDEF\uD83C\uDDF5" },
  { name: "Pacific/Palau", icon: "\uD83C\uDDF5\uD83C\uDDFC" },
  { name: "Asia/Ulaanbaatar", icon: "\uD83C\uDDF2\uD83C\uDDF3" },
  { name: "Asia/Ho_Chi_Minh", icon: "\uD83C\uDDFB\uD83C\uDDF3" },
  { name: "Asia/Almaty", icon: "\uD83C\uDDF0\uD83C\uDDFF" }, 
  { name: "Asia/Tbilisi", icon: "\uD83C\uDDEC\uD83C\uDDEA" },
  { name: "Africa/Johannesburg", icon: "\uD83C\uDDFF\uD83C\uDDE6" },
  { name: "Europe/Rome", icon: "\uD83C\uDDEE\uD83C\uDDF9" },
  { name: "UTC", icon: "" },
  { name: "America/Asuncion", icon: "\uD83C\uDDF5\uD83C\uDDFE" },
  { name: "America/Buenos_Aires", icon: "\uD83C\uDDE6\uD83C\uDDF7" },
  { name: "America/New_York", icon: "\uD83C\uDDFA\uD83C\uDDF8" },
  { name: "US/Pacific", icon: "\uD83C\uDDFA\uD83C\uDDF8" },
  { name: "US/Hawaii", icon: "\uD83C\uDDFA\uD83C\uDDF8" },
];

function makeTimeContent() {
let table = '<table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><th>Timezone</th><th>Time</th></tr>';
const now = new Date();
for (const timezone of timezones) { 
  table += "<tr><td>" + timezone.icon + " " + timezone.name + "</td><td>" + now.toLocaleString('en-US', { timeZone: timezone.name }) + "</td></tr>";
}
table += '</td></tr></table>';
document.getElementById("worldTimes").innerHTML = table;
}
