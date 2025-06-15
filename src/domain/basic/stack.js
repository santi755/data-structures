function createStack() {
    let stack = [];

    function push(item) {
        stack = [...stack, item];
    }

    function pop() {
        item = stack[stack.length - 1];
        stack = stack.slice(0, -1);
        return item;    
    }

    function peek() {
        return stack[stack.length - 1];
    }
    
    function isEmpty() {
        return stack.length === 0;
    }

    function size() {
        return stack.length;
    }

    function toArray() {
        return [...stack];
    }

    return { push, pop, peek, isEmpty, size, toArray };
}

export { createStack };