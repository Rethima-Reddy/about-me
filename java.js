

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


// for the vue component
const per = (length, height, width) => { return 4*(length + width + height) }

const perimeter = new Vue({
  el: '#perimeter',
  data: {
    length: 1,
    width: 3,
    height : 2,
    perimeter: 0
  },
  computed: {
    result: function () {
      const length = parseInt(this.length)
      const height = parseInt(this.height)
      const width = parseInt(this.width)
      return `${per(length, height, width)}.`
    }
  }
})

const cmd = 'https://jsonplaceholder.typicode.com/comments'
let i=0;
// fetch information
const getcmd = async () => {
  try {
    const response = await fetch(cmd)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj[0]}`)
    // const joke = obj.value.joke || 'No joke for you.'
    const ab = obj[i] || 'no album'
    i++
    return ab
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getcmd()
    document.querySelector('#result').innerHTML = answer.email;
    document.querySelector('#body').innerHTML = answer.body;

  } catch (error) { console.error(error) }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'jsonobj') { updateWithJoke(event) }
})
