function updateDateTime() {
    const dayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const UTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const UTCTime = now.toUTCString();

    dayOfTheWeekElement.textContent = dayOfWeek;
    UTCTimeElement.textContent = UTCTime;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every 5 seconds
