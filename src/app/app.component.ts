import { Component } from '@angular/core';

export interface item {
  imgLink: string;
  link: string;
  name: string;
  description: string;
  rating: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  items: item[];
  constructor() {
    this.items = [
      {
        imgLink: 'https://m.media-amazon.com/images/S/aplus-media/sc/8cf018da-b70f-4f03-b647-daf0e246ee6d.__CR0,0,970,600_PT0_SX970_V1___.jpg',
        link: 'https://www.amazon.com/GearLight-Tactical-Flashlight-S1000-PACK/dp/B072WHQFJ7/ref=sr_1_4?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-4',
        name: 'GearLight LED Tactical Flashlight',
        description: 'Ultra Bright & Long-lasting - Easily light up an entire room or focus in on objects up to 1000 feet away! 10 times brighter than old incandescent lights. Conveniently powered for hours with 3 AAA batteries or a single rechargeable battery. (Batteries are not included)',
        rating: 4.5
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/71EDKropYbL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Posture-Corrector-Men-Women-Truweo/dp/B07DKHTKP3/ref=sr_1_13?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-13',
        name: 'Posture Corrector For Men And Women',
        description: 'Our effective, breathable, adjustable and comfortable posture corrector with upper back support for men and women corrects your posture, which can help to alleviate the onset of back, neck and shoulder pain. Proper posture will help you live a healthier lifestyle and improve your confidence.',
        rating: 4
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/71E6NYbf24L._AC_SL1000_.jpg',
        link: 'https://www.amazon.com/OutdoorMaster-OTG-Ski-Goggles-Protection/dp/B01HLV5HR6/ref=sr_1_14?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-14',
        name: 'OutdoorMaster OTG Ski Goggles - Over Glasses',
        description: 'In order not to damage the anti-fog layer when cleaning your goggles, carefully clean the lens with a soft tissue.Store the goggles at a dry & well ventilated place after use to dispel sweat & humidity.Avoid scrubbing the lens too frequently as it may reduce the performance of the anti-fog coating.Avoid using cosmetics when wearing goggles in order to avoid stains and discoloring of the frame foam.',
        rating: 4.7
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/71smqRr0pmL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Airspun-Translucent-Setting-Foundation-Lightweight/dp/B000BNG4VU',
        name: 'Fitbit Charge 4 Fitness and Activity Tracker',
        description: 'Use built-in GPS to see your pace and distance on screen during outdoor runs, rides, hikes and more and see a workout intensity map in the app that shows your heart rate changes along your route',
        rating: 4.5
      },

      {
      imgLink: 'https://images-na.ssl-images-amazon.com/images/I/713yoywpMVL._AC_SL1500_.jpg',
      link: 'https://www.amazon.com/Vont-Camping-Lantern-Portable-Addition/dp/B018L2WM86/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-1',
      name: 'ont 2 Pack LED Camping Lantern',
      description: 'Super bright & long lasting: Equipped with 30 crazy bright leds, this compact lantern cuts through 360 degrees of darkness on the stormiest, dimmest nights. ',
      rating: 4.5
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/81IHJwGQ7wL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Resistance-Exercise-Strength-Beginner-Professional/dp/B07TZPVXMH/ref=lp_16225014011_1_10',
        name: 'Booty 3 Resistance Bands for Legs ',
        description: '3x resistance levels – Whether you’re a beginner or a pro, GYMBee resistant bands for women booty will help you step up your game. With the same size (14 inch), but different resistance levels, these resistance bands bring new life to your training!',
        rating: 4.6
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/91igwQiJ4hL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/HotHands-Body-Hand-Super-Warmers/dp/B0007ZF4Q8/ref=lp_16225014011_1_11',
        name: 'HotHands Body',
        description: 'HotHands Super Warmers are designed to keep you warmer longer, perfect for body and hand.',
        rating: 5
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/91xVOnMVbfL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Ab-Machine-Exercise-Equipment-Workout/dp/B00ZPAWV5C/ref=sr_1_13?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-13',
        name: 'Ab Roller for Abs Workout',
        description: 'Ab Roller for Abs Workout - Ab Roller Wheel Exercise Equipment - Ab Wheel Exercise Equipment - Ab Wheel Roller for Home Gym - Ab Machine for Ab Workout - Ab Workout Equipment',
        rating: 4.5
      },

      {
        imgLink: 'https://m.media-amazon.com/images/S/aplus-media/vc/113c4b32-d40d-4453-9a3e-e19a9e5f93ac.__CR0,0,300,400_PT0_SX300_V1___.jpg',
        link: 'https://www.amazon.com/YOSUDA-Indoor-Cycling-Bike-Stationary/dp/B07D528W98/ref=sr_1_16?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-16',
        name: 'YOSUDA Indoor Cycling Bike Stationary - Cycle Bike with Ipad Mount ',
        description: 'YOSUDA indoor cycling bicycle is a smooth, durable and easy to maintain bike designed to enable cyclists to exceed preset limits.',
        rating: 4.4
      },

      {
        imgLink: 'https://images-na.ssl-images-amazon.com/images/I/81ARh719W9L._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Fit-Simplify-Resistance-Exercise-Instruction/dp/B01AVDVHTI/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=M4TNKV96AEDXEA2PPAZ8&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1489014608&rnid=16225014011&s=sporting-goods&sr=1-1',
        name: 'Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag',
        description: 'High end exercise bands. Our 12″ by 2″ heavy duty loop resistance bands come in 5 varying resistance levels. This makes them perfect whether you are just starting to workout or a seasoned workout warrior.',
        rating: 4.5
      },
    ];
  }
}
