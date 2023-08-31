const loadCategoryApiData = async() =>{
const apiCategoryData = await fetch('https://openapi.programming-hero.com/api/videos/categories');
const categoryData = await apiCategoryData.json();
displayCategoryApiData(categoryData);
}
loadCategoryApiData();

function displayCategoryApiData(categoryData){
  const categoryContainer = document.getElementById('category-container');
  const categories = categoryData.data;
   console.log(categories);
   categories.forEach(category => {
    const a = document.createElement('a');
    a.innerHTML=`<button class="flex justify-center items-center bg-gray-200 hover:bg-red-600 hover:text-white py-2 px-5 rounded-sm">${category.category}</button>
    `;
categoryContainer.appendChild(a);
   });
}

