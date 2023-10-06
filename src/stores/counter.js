import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เอสเพรสโซ่ (Espresso) ', img: 'https://suzuki-coffee.com/wp-content/uploads/2016/09/espress-shot.jpg', price: 50 },
    { name: ' คาปูชิโน (Cappuccino) ', img: 'https://suzuki-coffee.com/wp-content/uploads/2016/09/cappuccino.jpg', price: 60 },
    { name: 'ลาเต้ (Latte) ', img: 'https://suzuki-coffee.com/wp-content/uploads/Late-art.jpg', price: 55 },
    { name: 'อเมริกาโน (Americano) ', img: 'https://i.pinimg.com/564x/c5/7a/0c/c57a0cb22dcbb76948965bf0077180b1.jpg', price: 45 },
    { name: ' มัคคิอาโต้ (Macchiato) ', img: 'https://i.pinimg.com/564x/41/8d/be/418dbeae4f747f5bf2942e55317197a5.jpg', price: 65 },
    { name: ' กาแฟโบราณ (Traditional) ', img: 'https://i.pinimg.com/564x/a5/4f/cf/a54fcfb24f400388a867e050ff40a796.jpg', price: 40 },
    { name: ' แฟลทไวท์ (Flat White) ', img: 'https://i.pinimg.com/564x/0c/53/27/0c53273000aa1e165959a5548681c812.jpg', price: 70 },
    { name: ' กาแฟส้ม (Orange Black Coffee) ', img: 'https://s359.kapook.com/pagebuilder/c3770f79-b923-4b7e-84b8-1dc467459534.jpg', price: 55 },
    { name: ' ชาเย็น(Iced tea) ', img: 'https://i.pinimg.com/564x/52/ed/ac/52edac68c6e30554a5faef16fd3a3aa9.jpg', price: 45 },
    { name: ' ชาน้ำผึ้งมะนาว (Honey Lemon Teal) ', img: 'https://www.bluemochatea.com/wp-content/uploads/2020/03/%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%94%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.jpg', price: 55 },
  ])
    
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
