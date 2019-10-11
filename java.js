

// for the java script component
const cal = (length,height,width) => 
{
    return 4*(length+height+width);
}
document.querySelector('#calculate').addEventListener('click',(e)=>
{
  e.preventDefault();
    let length = parseInt(document.getElementById("length").value);
    let height = parseInt(document.getElementById("height").value);
    let width = parseInt(document.getElementById("width").value);
    const per = `${cal(length,height,width)}`
    document.getElementById('peri').innerHTML= per ;

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