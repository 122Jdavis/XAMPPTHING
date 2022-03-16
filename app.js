const app = Vue.createApp({
data() {
  return {
    url: 'google.com',
    showBooks: true,
    books: [
      {title: 'name of the wind', author: 'patrick rothfuss', img: 'img/knight.jpg', },
      {title: 'the way of kings', author: 'brandon sanderson', img: 'img/knight.jpg'},
      {title: 'the final empire', author: 'brandon sanderson', img: 'img/knight.jpg'},
    ],

    age:45,
    x:0,
    y:0
  }
},
methods:{
  toggleShowBooks(){
  //  this.title= "The Wizard of Oz"
  this.showBooks = !this.showBooks
},
handleEvent(e, data){
  console.log(e, e.type)
  if (data){
    console.log(data)

  }
},
handleMousemove(e){
  this.x = e.offsetX
  this.y = e.offsetY
}
}
})

app.mount('#app')
