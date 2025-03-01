const colors=["bg-gray-100","bg-gray-800","bg-green-800","bg-yellow-400","bg-blue-600","bg-purple-400","bg-green-500","bg-indigo-800" ,"bg-blue-200"];
let currentIndex=0;

document.getElementById("color-theme").addEventListener("click",function(){
    document.body.classList.remove(...colors);
    currentIndex=(currentIndex+1)%colors.length;
    document.body.classList.add(colors[currentIndex]);
});