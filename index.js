function product() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => data)
    .then(function (data) {
      let pdata = `<tr>
   <th>Id</th>
   <th>Title</th>
   <th>Description</th>
   <th>Price</th>
   <th>Discount%</th>
   <th>Brand</th>
   <th>Category</th>
   <th>Rating</th>
   <th>Stock</th>
   </tr>`;

      for (i of data.products) {
        pdata += `<tr>
   <td>${i.id}</td>
   <td>${i.title}</td>
   <td>${i.description}</td>
   <td>${i.price}</td>
   <td>${i.discountPercentage}</td>
   <td>${i.brand}</td>
   <td>${i.category}</td>
   <td>${i.rating}</td>
   <td>${i.stock}</td>
   </tr>`;
      }
      document.getElementById("rdata").innerHTML = pdata;
    })
    .catch((err) => console.log(err));
}

