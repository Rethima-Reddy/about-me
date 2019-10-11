


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
const updateWithCmd = async (event) => {
  try {
    document.querySelector('#result').innerHTML = ''
    const answer = await getcmd()
    document.querySelector('#result').innerHTML = answer.email;
    document.querySelector('#body').innerHTML = answer.body;

  } catch (error) { console.error(error) }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'jsonobj') { updateWithCmd(event) }
})
