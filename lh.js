function show() {
    //input
    var ten = document.getElementById("fullname").value;
    var dt = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    var nd = document.getElementById("content").value;
    //output
    var output = "Thông tin của bạn:\n\n" +
        "Họ và tên: " + ten + "\n" +
        "Email: " + email + "\n" +
        "Số điện thoại: " + dt + "\n" +

        "Nội dung góp ý: " + nd;
    if (confirm(output)) {
        // If user confirms, submit the form
        return true;
    } else {
        // If user cancels, prevent form submission
        return false;
    }


}