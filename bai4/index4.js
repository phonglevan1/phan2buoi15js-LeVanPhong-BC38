function Client() {
    var codeClient = document.getElementById("txt-codeClient").value;
    var channelClient = document.getElementById("txt-channelClient").value;
    channelClient = parseFloat(channelClient);
    var money = (channelClient * 7.5) + 20.5 + 4.5;
    document.getElementById("result").innerHTML ="Mã khách hàng: " + codeClient +" : $ " + money.toLocaleString('en-US');
}
function Prise(){
    var codePrise = document.getElementById("txt-codePrise").value;
    var channelPrise =document.getElementById("txt-channelPrise").value;
    var connection = document.getElementById("validationDefault03").value;
    connection = parseFloat(connection);
    channelPrise = parseFloat(channelPrise);
    var moneyPrise = 0;
    if(connection <=10){
        moneyPrise = 15 + (channelPrise*50) + 75;
        document.getElementById("result1").innerHTML ="Mã khách hàng: " + codePrise +" : $ " + moneyPrise.toLocaleString('en-US');
    }
    else{
        moneyPrise = 15 + (channelPrise*50) + 75 + ((connection-10)*5);
        document.getElementById("result1").innerHTML ="Mã khách hàng: " + codePrise +" : $ " + moneyPrise.toLocaleString('en-US');
    }
}