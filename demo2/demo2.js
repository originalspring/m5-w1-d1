class HelloMessage extends React.component{
render(){
  return React.createElement(
"div",
null,
"Hello",
 this.props.name
  );
}
} 

ReactDOM.render(React.createElement(HelloMessage,
  {name: "Westcliff"}),
  document.getElementById('hello-example'));