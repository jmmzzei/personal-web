export const elements = new (function() {
  const animate = document.getElementById("animate")
  this.perColumn = 10
  this.perRow = 35
  this.size = animate.offsetWidth / this.perRow
  this.number = this.perRow * this.perColumn
})()
