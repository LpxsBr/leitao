const dt = new Date()
let i = 1
setInterval(() => {

    const dt = new Date()
    document.getElementById('timer').innerHTML = dt.toString()
    const fe = fetch('http://localhost:8000/app/memory')
    fe
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.msg)
            document.getElementById('memory').innerHTML = data.msg
        })
        .catch((err) => console.log(err))
}, 1000)