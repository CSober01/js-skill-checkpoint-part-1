// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let sum = 0;
  let result = 0;
  for (const item of products) {
    sum += item.price * item.quantity;
    if (promotionCode === "SALE20") {
      result = sum - (sum * 0.2);
    } else if (promotionCode === "SALE50") {
      result = sum - (sum * 0.5);
    } else {
      return 0;
    }
  }
  return result;
}

console.log(calculateTotalPrice(products, "SALE50"));
