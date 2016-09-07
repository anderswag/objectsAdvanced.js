var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var resultObj = {}

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function totalSales(){

  for (var i = 0; i < companySalesData.length; i++){
    //console.log(companySalesData[i]["sales"]);
    var count = 0;
    for (var k = 0; k < companySalesData[i]["sales"].length; k++){
      count = count + companySalesData[i]["sales"][k];
    }
    var tax = (count*taxRates[companySalesData[i].province]);

    if (!resultObj[companySalesData[i].name]){
      resultObj[companySalesData[i].name] = {
        totalSales: count,
        totalTaxes: tax
      };
    } else {
      resultObj[companySalesData[i].name].totalSales += count;
      resultObj[companySalesData[i].name].totalTaxes += tax;
    }
  }

  console.log(resultObj);
}

totalSales();


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/