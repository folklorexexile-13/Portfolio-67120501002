document.addEventListener("DOMContentLoaded", function() {
    
    //  nav-action-btn
    const actionButtons = document.querySelectorAll('.nav-action-btn');
    
    // Console
    console.log("พบปุ่มเปลี่ยนหน้าจำนวน: " + actionButtons.length + " ปุ่ม");

    actionButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            
            event.preventDefault(); 
            
            
            const targetUrl = this.getAttribute('data-url');
            
            if (targetUrl) {
                
                window.location.href = targetUrl;
            } else {
                alert("เกิดข้อผิดพลาด: ไม่พบลิ้งก์ปลายทาง (data-url) ในปุ่มนี้");
            }
        });
    });
});