const date = new Date('Feb 6 2022 15:00:00 GMT+0530')

const Main = {
    year: 2022,
    season: 1,
    tagline: "A Hub For Cyber Geeks!",
    dates: {
        day1: new Date(2022, 1, 8).toDateString().split(" ").slice(1).join(" "),
        day2: new Date(2022, 1, 9).toDateString().split(" ").slice(1).join(" ")
    },
    registrationClosingDate: date, // month is 0 indexed; Jan is 0;
    brochureDownload: "https://drive.google.com/u/0/uc?id=1ceSZtWD9UyQy3UQBFprOEDmPUGyrOZTu&export=download",
    brochurePreview: "https://drive.google.com/file/d/1ceSZtWD9UyQy3UQBFprOEDmPUGyrOZTu/preview",
    updateMessage: date.getTime() <= new Date().getTime() ? "IMPORTANT INFORMATION: REGISTRATIONS ARE CLOSED | BACKGROUND GUIDE FOR KNOCK OUT IS RELEASED" : "IMPORTANT INFORMATION: LAST DATE FOR REGISTRATION - FEBRUARY 6 2022, 3 PM"
}

export default Main
