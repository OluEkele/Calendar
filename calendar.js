const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");
// Getting the new date, cureent year and month
let date = new Date();
currYear = date.getFullYear(),
currMonth = date.getMonth();
console.log(date);
const months = ["January", "February", "Match", "April", "May", "June","July",
                "August", "September","October", "November", "December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 0).getDay(); //getting first day of month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay(); //getting last day of month
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of month
    console.log(firstDayOfMonth)
    let liTag = "";

    for(let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for(let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for(let i = lastDayOfMonth; i < 7; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon =>{
    icon.addEventListener('click', () =>{
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }

        renderCalendar();
    });
});