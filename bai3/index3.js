function tax() {
    var name = document.getElementById("txt-name").value;
    var income = document.getElementById("txt-income").value;
    var people = document.getElementById("txt-people").value;
    var incomePeople = 0;
    var tax = 0;
    income = parseFloat(income);
    people = parseFloat(people);
    incomePeople = (income - 4e6) - (people * 1600e3);
    if (incomePeople > 0) {
        if (income <= 60e6) {
            tax = incomePeople * 0.05;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
        else if (income <= 120e6) {
            tax = incomePeople * 0.1;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
        else if (income <= 210e6) {
            tax = incomePeople * 0.15;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
        else if (income <= 384e6) {
            tax = incomePeople * 0.2;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
        else if (income <= 960e6) {
            tax = incomePeople * 0.3;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
        else {
            tax = incomePeople * 0.35;
            document.getElementById("result").innerHTML ="Họ tên: " + name + " : Tiền thuế thu nhập cá nhân: " +  tax.toLocaleString('vi-VN') + " VND";
        }
    }
    else {
        document.getElementById("result").innerHTML = "Tổng thu nhập không đúng hoặc điền không đủ";
    }
}