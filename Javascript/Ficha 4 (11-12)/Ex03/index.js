function time(){
    const d = new Date();
    hour = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    console.log(hour + ':' + minutes + ':' + seconds)
}
setInterval(time ,2000)