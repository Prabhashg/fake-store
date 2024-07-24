let buildTable = function (data) {
    data.forEach(element => {
        let row = `<tr>
        <td>${element.title}</td>
        <td>${element.description}</td>
        <td>$${element.price}</td>
        <td>${element.rating.rate} (${element.rating.count})</td>
        <td><img src="${element.image}" alt="" style="width:60px; height:60px"></td>
        </tr>`

        document.getElementById('products').innerHTML += row;
    })
}

fetch('https://fakestoreapi.com/products?limit=100')
    .then(res => {
        return res.json();
    })
    .then(data => {
        buildTable(data)
    })
    .catch(err => {
        console.log(err);
        document.getElementsByClassName('container').innerHTML = "";
        document.getElementById('errorMessage').innerHTML = "Something Unexpected happened";
    });