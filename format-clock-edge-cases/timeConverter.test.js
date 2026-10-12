
import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("correctly convert 13:00 with a leading zero", function () {
  assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});

test("correctly keep the minutes", function () {
  assert.equal(formatAs12HourClock("13:45"), "01:45 pm");
});

test("correctly convert midnight", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("correctly convert noon", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("correctly convert midnight", function() {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});
test("correctly convert noon", function() {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});
test("correctly convert 13:00", function() {
    assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
});
test("correctly keep the minutes", function() {
   assert.equal(formatAs12HourClock("13:45"), "01:45 pm");
});
test("correctly convert 12:30", function() {
    assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
});
test("correctly convert the last minute of the day", function() {
    assert.equal(formatAs12HourClock("23:59"), "11:59 pm");
});
test("correctly convert 00:30", function() {
    assert.equal(formatAs12HourClock("00:30"), "12:30 am");
});