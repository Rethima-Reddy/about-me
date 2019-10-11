
// for the java script component
const cal = (l,h,w) => 
{
  const a = l+h+w
  return 4*a
}
document.querySelector('#calculate').addEventListener('click',(e)=>
{
  e.preventDefault();
    let l = parseInt(document.getElementById("length").value);
    localStorage.setItem("len", l);
    let h = parseInt(document.getElementById("height").value);
    localStorage.setItem("ht",h);
    let w = parseInt(document.getElementById("width").value);
    localStorage.setItem("wdt",w);
    const a = parseInt(localStorage.getItem("len"));
    console.log(a)
    const b = parseInt(localStorage.getItem("ht"));
    console.log(b)
    const c = parseInt(localStorage.getItem("wdt"));
    console.log(c)
    //console.log(per)
    document.getElementById('peri').innerHTML= `${cal(a,b,c)}` ;

})
