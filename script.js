fetch("https://mobcart890.herokuapp.com/users")
.then(response => response.json())
.then(data => {
    console.log(data)
    output = ""
    for(i=0; i<data.length;i++){
        output+=`<tr>`
        output+=`<td>${data[i]['id']}</td>`
        output+=`<td>${data[i]['mobile_name']}</td>`
        output+=`<td>${data[i]['brand']}</td>`
        output+=`<td>${data[i]['ram']}</td>`
        output+=`<td>${data[i]['price']}</td>`
        output+=`</tr>`
    }
    document.getElementById('tbody').innerHTML=output
})
