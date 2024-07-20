
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productCat = document.getElementById('productCat')
let productDesc = document.getElementById('productDesc');
let myBtn=document.getElementById('myBtn')
let currnetIndex=0;

myBtn.addEventListener("click" , add)
let productContainer;

if(localStorage.getItem('my proudcts')!=null){
    productContainer=JSON.parse(localStorage.getItem('my proudcts'));
    displayProduct();
}

else{
    productContainer=[];
}

function add(){
    if(myBtn.innerHTML=="add product"){
        addProduct()
    }

    else{
        editProduct()
    }
}

// console.log(productName)
// console.log(productPrice)
// console.log(productCat)
// console.log(productDesc)

function addProduct() {

    let product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCat.value,
        desc: productDesc.value
    }
    productContainer.push(product);
    console.log(productContainer);
    localStorage.setItem("my proudcts" , JSON.stringify(productContainer))
    clearForm();
    displayProduct()
}


function clearForm() {
    productName.value = ''
    productPrice.value = ''
    productCat.value = ''
    productDesc.value = ''

}

function displayProduct(){
    let add=''
    for(let i=0; i<productContainer.length ; i++){
        
        add+=`
           <tr>
            <td>  ${i}  </td>
            <td>  ${productContainer[i].name}</td>
            <td>  ${productContainer[i].price}</td>
            <td>  ${productContainer[i].cat}</td>
            <td>  ${productContainer[i].desc}</td>
            <td> <button class=" btn btn-outline-warning" onclick="setForm(${i})" >update</button> </td>

            <td> <button class=" btn btn-outline-danger" onclick="deleteProudct(${i})">delete</button> </td>
           </tr>  `
    }
    document.getElementById('rowData').innerHTML=add
}


function deleteProudct (index){
    productContainer.splice(index , 1);
    localStorage.setItem("my proudcts" , JSON.stringify(productContainer));
    displayProduct()

}

function search(tirm){
     let add='';

     for(let i=0 ; i<productContainer.length ;i++){
        if(productContainer[i].name.toLowerCase().includes(tirm.toLowerCase())==true){

        add+=`
           <tr>
            <td>  ${i}  </td>
            <td>  ${productContainer[i].name}</td>
            <td>  ${productContainer[i].price}</td>
            <td>  ${productContainer[i].cat}</td>
            <td>  ${productContainer[i].desc}</td>
            <td> <button class=" btn btn-outline-warning">update</button> </td>
            <td> <button class=" btn btn-outline-danger" onclick="deleteProudct(${i})">delete</button> </td>
           </tr>
       `
        }

    document.getElementById('rowData').innerHTML=add

     }
}





function setForm(index){
   currnetIndex=index;
   productName.value=productContainer[index].name
   productPrice.value=productContainer[index].price
   productCat.value=productContainer[index].cat
   productDesc.value=productContainer[index].desc

   myBtn.innerHTML="update product"
   
}


function editProduct(){

    productContainer[currnetIndex].name=productName.value
    productContainer[currnetIndex].price=productPrice.value
    productContainer[currnetIndex].cat=productCat.value
    productContainer[currnetIndex].desc=productDesc.value
    myBtn.innerHTML="add product";
    localStorage.setItem("my proudcts" , JSON.stringify(productContainer))
    clearForm();
    displayProduct()



}


