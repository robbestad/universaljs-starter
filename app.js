const Universal = require("universaljs");

module.exports = Universal.createComponent({
    render() {
    return (<div id="row">
        <section id="app">
            <h1>Starter App</h1>
            <div>
                This is a simple starter app :-)
            </div>
            <p>
                Generate a new bundle by issuing the following
                command in your terminal:
            </p>
            <pre>
                npm run build
            </pre>
            <p>
            Good luck, and may you find this library useful!
            </p>
        </section>
    </div>)
    }
});

