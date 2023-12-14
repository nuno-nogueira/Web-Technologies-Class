function time(){
    const d = new Date();
    year = d.getFullYear();
    month = d.getMonth();
    day = d.getDate();
    console.log(year + ':' + month + ':' + day)
}
setInterval(time ,60000)