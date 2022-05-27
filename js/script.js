let tier1 = {
    "name": "Tier 1",
    "amount": "10000",
    "interest": "7",
    "members": []
};

let tier2 = {
    "name": "Tier 2",
    "amount": "20000",
    "interest": "12",
    "members": []
};

let tier3 = {
    "name": "Tier 3",
    "amount": "30000",
    "interest": "25",
    "members": []
};

$(document).ready(function(){

     $("#form").submit((e) => {
        e.preventDefault();
        let name = $("#name")[0].value;
        let tier = $("#tier")[0].value
        let amount = $("#amount")[0].value

        let userName = $("#userName")[0].innerHTML;
        let userTier = $("#userTier")[0];
        let userAmount = $("#userAmount")[0];
        let userInterest = $("#userInterest")[0];
        let userReturns = $("#userReturns")[0];

        switch(tier){
            case "1":
                if(amount != 10000){
                    alert("Wrong amount!!");
                    return;
                }
                tier1.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier1.name;
                $("#userAmount")[0].innerHTML = tier1.amount;
                $("#userInterest")[0].innerHTML = tier1.interest;
                $("#userReturns")[0].innerHTML = parseInt(tier1.interest) /100 * parseInt(tier1.amount);

                var total = parseInt($("#balance")[0].innerHTML);
                $("#otherMembers").append(`
                  <tr>
                    <td >${name}</td>
                    <td >${tier1.name}</td>
                    <td >${tier1.amount}</td>
                    <td>${tier1.interest}</td>
                    <td >${$("#userReturns")[0].innerHTML}</td>
                  </tr>
                `);
                total += 10000;

                $("#balance")[0].innerHTML = total
                break;
            case "2":
                if(amount != 20000){
                    alert("Wrong amount!!");
                    return;
                }
                tier2.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier2.name;
                $("#userAmount")[0].innerHTML = tier2.amount;
                $("#userInterest")[0].innerHTML = tier2.interest;
                $("#userReturns")[0].innerHTML = parseInt(tier2.interest) /100 * parseInt(tier2.amount);

                var total = parseInt($("#balance")[0].innerHTML);
                $("#otherMembers").append(`
                  <tr>
                    <td >${name}</td>
                    <td >${tier2.name}</td>
                    <td >${tier2.amount}</td>
                    <td>${tier2.interest}</td>
                    <td >${$("#userReturns")[0].innerHTML}</td>
                  </tr>
                `);
                total += 20000;

                $("#balance")[0].innerHTML = total
                break;
            case "3":
                if(amount != 30000){
                    alert("Wrong amount!!");
                    return;
                }
                tier3.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier3.name;
                $("#userAmount")[0].innerHTML = tier3.amount;
                $("#userInterest")[0].innerHTML = tier3.interest;
                $("#userReturns")[0].innerHTML = parseInt(tier3.interest) /100 * parseInt(tier3.amount);

                var total = parseInt($("#balance")[0].innerHTML);
                $("#otherMembers").append(`
                  <tr>
                    <td >${name}</td>
                    <td >${tier3.name}</td>
                    <td >${tier3.amount}</td>
                    <td>${tier3.interest}</td>
                    <td >${$("#userReturns")[0].innerHTML}</td>
                  </tr>
                `);
                total += 30000;

                $("#balance")[0].innerHTML = total
                break;
            default:
                alert("Wrong input");
                return;
        }
     });
});
