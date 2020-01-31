const element = React.createElement("div", {
  class: "main",
  title: "outer div"
}, React.createElement("div", {
  class: "name"
}, "Ritu Gupta"), React.createElement("img", {
  src: "image/myimage.jpg"
}), React.createElement("p", null, " Hi,my name is Ritu Gupta and I am seeking MS(CS) in San Diego State University. I hail from India and have been living in USA since three years with my husband. My hobbies are painting,traveling and exploring new places around.But recently, I discovered that I am a good dancer too! I love whatever I do as I have a steady source of motivation that drives me to do my best. "), React.createElement("form", {
  action: "https://github.com/rgupta2063?tab=repositories/",
  method: "get",
  target: "_blank"
}, React.createElement("button", {
  class: "button",
  type: "submit"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('content'));