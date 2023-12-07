const one = () =>{
    return 1
}

const two = () =>{
    return (one() + one())
}

const three = () =>{
    const ans = two() + one()
    return ans
}

three()

// I can track call stack in the browser.. Inspect --> Sources --> Top --> Our js File --> Click on it --> Click on the line which I want to debug with the help of breakpoints and after adding breakpoint --> Refresh the page --> Step into next function call