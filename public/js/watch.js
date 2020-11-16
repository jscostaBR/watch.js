(function(){
 const getElement = el => document.querySelector(el);
 const addRotate = (element, rotation) => element.style.transform = `rotate(${rotation}deg)`;

 function watch(){
  let timezone = getElement('#timezone');
  timezone = timezone.value;
  let dateTZ = new Date().toLocaleString("default", {timeZone: `${timezone}`})

  let a = dateTZ.slice(0,10)
  let b = dateTZ.slice(11,19)

  a = a.split("/").reverse().join("/")

  let date = new Date(`${a} ${b}`);
  let s = date.getSeconds() * 6,
      m = date.getMinutes() * 6 + (s / 60),
      h = date.getHours() * 30 + (m / 12);

  const secondsEl = getElement('#seconds');
  const minutesEl = getElement('#minutes');
  const hoursEl = getElement('#hours');
  
  addRotate(secondsEl, s);
  addRotate(minutesEl, m);
  addRotate(hoursEl, h);
 }
 setInterval(watch, 1000)

 function digital(){
  let timezone = getElement('#timezone')
  timezone = timezone.value

  let date = new Intl.DateTimeFormat("pt-BR", {timeZone: `${timezone}`, hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(new Date());
  
  let time = getElement("#timeD")
  time.innerHTML = date;
 }
 setInterval(digital, 1000)

 function datenow(){
  let timezone = getElement('#timezone');
  timezone = timezone.value;
    
  let date = new Intl.DateTimeFormat("pt-BR", {timeZone: `${timezone}`}).format(new Date());

  let dateNow = getElement('#dateD')
  dateNow.innerHTML = date
 }
 setInterval(datenow, 1000)
})();