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
        output += `<td>`;
		output += `<a href="edit.html?id=${records[i]._id}"><button class="btn btn-primary">Edit</button></a>`;
		output += '&nbsp;&nbsp;';
		output += `<button class="btn btn-danger" onclick=deleteData('${records[i]._id}')>Delete</button>`;
		output += `</td>`;
        output+=`</tr>`
    }
    document.getElementById('tbody').innerHTML=output
})
