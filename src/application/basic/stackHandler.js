function stackHandler() {

    function handle(req, res) {
        res.json({
            message: 'Stack s!',
            timestamp: new Date().toISOString()
        });
    }

    return { handle };
}

export { stackHandler };