function createQueue() {
    let queue = [];

    function enqueue(item) {
        queue = [...queue, item];
    }

    function dequeue () {
        const item = queue[0];
        queue = queue.slice(1);
        return item;
    }

    function peek() {
        return queue[0];
    }
    
    function isEmpty() {
        return queue.length === 0;
    }

    function size() {
        return queue.length;
    }

    function toArray() {
        return [...queue];
    }

    return { enqueue, dequeue, peek, isEmpty, size, toArray };
}

export { createQueue };