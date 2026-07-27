function Body() {
    function handleOnClick(e) {
        alert('button clicked!');
        console.log(e);
    }

    return (
        <div>
            <button onClick={handleOnClick}>Click Me!</button>
        </div>
    );
}

export default Body;