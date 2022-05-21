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

        let userName = $("#userName")[0].innerHTML;
        let userTier = $("#userTier")[0];
        let userAmount = $("#userAmount")[0];
        let userInterest = $("#userInterest")[0];
        let userReturns = $("#userReturns")[0];

        switch(tier){
            case "1":
                tier1.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier1.name;
                $("#userAmount")[0].innerHTML = tier1.amount;
                $("#userInterest")[0].innerHTML = tier1.amount;
                $("#userReturns")[0].innerHTML = parseInt(tier1.interest) /100 * parseInt(tier1.amount);

                $("#otherMembers").empty();
                var total = 0;
                for(let member of tier1.members){
                    $("#otherMembers").append(`
                      <tr>
                        <td >${member}</td>
                        <td >${tier1.name}</td>
                        <td >${tier1.amount}</td>
                        <td>${tier1.interest}</td>
                        <td >${$("#userReturns")[0].innerHTML}</td>
                      </tr>
                    `);
                    total += 10000;
                }

                    $("#otherMembers").append(`
                      <tr>
                        <td>TOTAL</td>
                        <td >${total}</td>
                      </tr>
                    `)
                break;
            case "2":
                tier2.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier2.name;
                $("#userAmount")[0].innerHTML = tier2.amount;
                $("#userInterest")[0].innerHTML = tier2.amount;
                $("#userReturns")[0].innerHTML = parseInt(tier2.interest) /100 * parseInt(tier2.amount);

                $("#otherMembers").empty();
                var total = 0;
                for(let member of tier2.members){
                    $("#otherMembers").append(`
                      <tr>
                        <td >${member}</td>
                        <td >${tier2.name}</td>
                        <td >${tier2.amount}</td>
                        <td>${tier2.interest}</td>
                        <td >${$("#userReturns")[0].innerHTML}</td>
                      </tr>
                    `);
                    total += 10000;
                }

                    $("#otherMembers").append(`
                      <tr>
                        <td>TOTAL</td>
                        <td >${total}</td>
                      </tr>
                    `)
                break;
            case "3":
                tier3.members.push(name);
                $("#userName")[0].innerHTML = name;
                $("#userTier")[0].innerHTML = tier3.name;
                $("#userAmount")[0].innerHTML = tier3.amount;
                $("#userInterest")[0].innerHTML = tier3.amount;
                $("#userReturns")[0].innerHTML = parseInt(tier3.interest) /100 * parseInt(tier3.amount);

                $("#otherMembers").empty();
                var total = 0;
                for(let member of tier3.members){
                    $("#otherMembers").append(`
                      <tr>
                        <td >${member}</td>
                        <td >${tier3.name}</td>
                        <td >${tier3.amount}</td>
                        <td>${tier3.interest}</td>
                        <td >${$("#userReturns")[0].innerHTML}</td>
                      </tr>
                    `);
                    total += 10000;
                }

                    $("#otherMembers").append(`
                      <tr>
                        <td>TOTAL</td>
                        <td >${total}</td>
                      </tr>
                    `)
                break;
            default:
                alert("Wrong input");
                return;
        }
     });
});
