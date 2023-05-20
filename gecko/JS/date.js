const today = document.getElementById("date");
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2,"0");
const day = String(date.getDate()).padStart(2,"0");

const getDate = () => {
    today.innerText = `${year}-${month}-${day}`;
}
getDate();
setInterval(getDate,1000);