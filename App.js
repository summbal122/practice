const ourDiv = React.createElement("div", {id:"div1"} , 
  React.createElement("div", {id:"innerDiv"}, [
  React.createElement("h1",{id:"heading"}, "I am h1 tag"),
  React.createElement("h2",{id:"heading"}, "I am h2 tag")

  ])
);
const root = ReactDOM.createRoot(document.getElementById('products'));
root.render(ourDiv);