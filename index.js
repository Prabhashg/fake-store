async function buildTable() {
    let selectedNum = document.getElementById('numOfProduct').value
    console.log(selectedNum);

    try {
        let data = await fetch('https://fakestoreapi.com/products?limit=100').then(res => {
            return res.json();
        });

        document.getElementById('numOfProduct').setAttribute('max', data.length);

        document.getElementById('products').innerHTML = "";
        for (let i = 0; i < selectedNum; i++) {
            let row = `<tr>
        <td>${data[i].id}</td>   
        <td>${data[i].title}</td>
        <td>${data[i].description}</td>
        <td>$${data[i].price}</td>
        <td>${data[i].rating.rate} <br> (${data[i].rating.count})</td>
        <td><img src="${data[i].image}" alt="" style="width:60px; height:60px"></td>
        </tr>`

            document.getElementById('products').innerHTML += row;
        }

    } catch (error) {
        console.log(error);
        document.getElementsByClassName('container').innerHTML = "";
        document.getElementById('errorMessage').innerHTML = "Something Unexpected happened";
    }



}

buildTable();

document.getElementById('numOfProductBtn').addEventListener('click', buildTable);