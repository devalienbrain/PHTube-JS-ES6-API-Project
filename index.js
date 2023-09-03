// Category Api Loading codes start
const loadCategoryApiData = async() =>{
const apiCategoryData = await fetch('https://openapi.programming-hero.com/api/videos/categories');
const categoryData = await apiCategoryData.json();
displayCategoryApiData(categoryData);
}
loadCategoryApiData();

function displayCategoryApiData(categoryData){
  const categoryContainer = document.getElementById('category-container');
  const categories = categoryData.data;
   categories.forEach(category => {
    const a = document.createElement('a');
    a.innerHTML=`<button onclick="dataCategorySelector(this)"  class="flex justify-center items-center bg-gray-200 py-2 px-5 rounded-sm">${category.category}</button>
    `;
categoryContainer.appendChild(a);
   });
    categoryContainer.childNodes[1].childNodes[0].classList.add('bg-red-500');
  categoryContainer.childNodes[1].childNodes[0].classList.add('text-white');
}
// Category Api Loading codes end

// Api all data loading codes
let url = 'https://openapi.programming-hero.com/api/videos/category/1000';

function dataCategorySelector(event){
const categoryContainer = document.getElementById('category-container');
for(let i = 1; i<=4;i++){
  categoryContainer.childNodes[i].childNodes[0].classList.remove('bg-red-500');
  categoryContainer.childNodes[i].childNodes[0].classList.remove('text-white');
  categoryContainer.childNodes[i].childNodes[0].classList.add('bg-gray-200');
  categoryContainer.childNodes[i].childNodes[0].classList.add('text-black');
  
}
event.classList.remove('bg-gray-200');
    event.classList.remove('text-black');
    event.classList.add('bg-red-500');

    event.classList.add('text-white');

  if (event.innerText === 'Music'){
    url='https://openapi.programming-hero.com/api/videos/category/1001';
  }
  else if (event.innerText === 'Comedy'){
    url='https://openapi.programming-hero.com/api/videos/category/1003';
  }
  else if (event.innerText === 'Drawing'){
    url='https://openapi.programming-hero.com/api/videos/category/1005';
  }
  else{
    url='https://openapi.programming-hero.com/api/videos/category/1000';
  }
  
  categoryWiseLoadApiData();
}

const categoryWiseLoadApiData = async() =>{
  const apiDataByCategory = await fetch(url);
  const dataByCategory = await apiDataByCategory.json();
  showApiDataByCategory(dataByCategory);
}
categoryWiseLoadApiData();
function showApiDataByCategory(dataByCategory){
  console.log(dataByCategory.data);
const datas = dataByCategory.data;
  const apiDataContainer = document.getElementById('api-data-container');
  apiDataContainer.textContent='';
  datas.forEach(data => {
    console.log(data);
  const div = document.createElement('div');
  
  div.innerHTML=`<div class="card bg-base-100 shadow-xl">
  <figure><img class="w-72 h-48" src="${data.thumbnail}" /></figure>
   <div class="card-body">
<div class="flex gap-3">
  <div>
    <img src="" alt="Author pic">
  </div>
  <div class="text-left">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
  </div>`;

apiDataContainer.appendChild(div);
});
}