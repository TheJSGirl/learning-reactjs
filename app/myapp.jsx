// const user={
//     firstName : 'Priyanka',
//     lastName  : 'negi'
// }

// function formatName(){
//     return user.firstName+ " " +user.lastName;
// }

function tick(){
    const element =(
        <div>
            <h1>hello world</h1>
            <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(element, document.getElementById('app'));
}

setInterval(tick, 1000);



// ReactDOM.render(<h1>hello {formatName()}</h1>, document.getElementById('app'));