function tax(sum)
{ 
  var _tax = 0; //税
  var _amount = 0;//收入
  if(sum > 3500){
    _amount = 3500;
  }else{
    _amount = sum;
  }
  sum = sum - 3500;
  if(sum >80000){
    _tax = (sum - 80000)*0.45
    _amount = (sum - 80000)*0.55;
    sum = 80000;
  }
  if(sum > 55000){
    _tax =_tax+(sum - 80000) * 0.35
    _amount = _amount + (sum - 80000) * 0.65;
    sum = 55000;
  }
  if (sum > 35000) {
    _tax = _tax + (sum - 35000) * 0.30
    _amount = _amount + (sum - 35000) * 0.70;
    sum = 35000;
  }
  if (sum > 9000) {
    _tax = _tax + (sum - 9000) * 0.25;
    _amount = _amount + (sum - 9000) * 0.75;
    sum = 9000;
  }
  if (sum > 4500) {
    _tax = _tax + (sum - 4500) * 0.20;
    _amount = _amount + (sum - 4500) * 0.80;
    sum = 4500;
  }
  if (sum > 1500) {
    _tax = _tax + (sum - 1500) * 0.10;
    _amount = _amount + (sum - 1500) * 0.9;
    sum = 1500;
  }
  if(sum > 0)
  {
    _tax = _tax + sum * 0.03;
    _amount = _amount + sum * 0.97;
  }
  return {
    "tax":_tax,
    "income":_amount,
  };
}

export default tax;



// 级数	应纳税所得额(含税)	应纳税所得额(不含税)	税率(%)	速算扣除数
// 不超过1500元的	不超过1455元的	3	0
// 超过1500元至4, 500元的部分	超过1455元至4, 155元的部分	10	105
// 超过4, 500元至9, 000元的部分	超过4, 155元至7, 755元的部分	20	555
// 超过9, 000元至35, 000元的部分	超过7, 755元至27, 255元的部分	25	1, 005
// 超过35, 000元至55, 000元的部分	超过27, 255元至41, 255元的部分	30	2, 755
// 超过55, 000元至80, 000元的部分	超过41, 255元至57, 505元的部分	35	5, 505
// 超过80, 000元的部分	超过57, 505的部分	45	13, 505