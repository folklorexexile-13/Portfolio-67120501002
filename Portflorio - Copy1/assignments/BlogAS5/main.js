// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    var ButtonPost = document.getElementById("PostButton");
    ButtonPost.onclick = postFunction;
   
    var ButtonClear = document.getElementById("ClearButton");
    ButtonClear.onclick = clearFunction;
}

let postCount = 0;

function postFunction() {
    let messageText = document.getElementById("message").value;

    if (postCount === 0){
        document.getElementById("topic").innerHTML = messageText;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = messageText;
    } else if (postCount === 2){
        document.getElementById("reply2").innerHTML = messageText;
    }

    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    document.getElementById("message").value = "";

    // 4. เพิ่มค่า postCount
    postCount++;
}

function clearFunction() {
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    
    // 2. ล้างข้อความใน textarea
    document.getElementById("message").value = "";
    

   postCount = 0; 
}