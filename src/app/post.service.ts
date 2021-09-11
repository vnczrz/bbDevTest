import { Injectable } from '@angular/core';
import { Post } from './shared/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
   

  //array of posts
  private posts: Post[]= [
    new Post(
      "ea8ec0dd-88f4-4521-9e64-c887fbfa9a86",
      "Why Every Dispensary Should Have Online Ordering",
      "Frankie Flowers",
      "Thu Sep 06 2021 12:34:30 GMT-0700",
      "https://myblackbird.com/wp-content/uploads/2020/06/brooke-cagle-F_y8J9Ftwi0-unsplash-1-1024x683.jpg",
      "Make a quick pipe out of an apple and release the carb Purple Haze all around. Fully man, keif gummies are the indoor equivalent of body high super mellow. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. An ancient plant referenced biblically as the Holy Herb and gets your noggin’ rocked. Rasta!\nRolling down the street smoking endo, laid back. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed? Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart.\nHydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Optimizing dime bags of pre-rolled honey oil dabs. Oh my gawd, they like totally know I'm high. Dude you’re just being paranoid, don’t call the cops."
      ),
    new Post(
      "26a8a473-733b-4068-bc59-8e376a59473c",
      "Cannabis products for wellness",
      "Jane Tincture",
      "Thu Sep 03 2021 11:16:30 GMT-0700",
      "https://blackbirdgo.com/wp-content/uploads/2021/08/samantha-gades-k95uqdEe8R4-unsplash-1024x684.jpg",
      "Indica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed? Oh my gawd, they like totally know I'm high. Rolling down the street smoking endo, laid back. Wake and bake indica hash at the dispensary in Oregon decriminalized.\nMake a quick pipe out of an apple and release the carb Purple Haze all around. Fully man, keif gummies are the indoor equivalent of body high super mellow. Toke up on the Pineapple Express with that sticky icky shotgun sensamillia. An ancient plant referenced biblically as the Holy Herb and gets your noggin’ rocked. Rasta!\nRolling down the street smoking endo, laid back. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece. Broccoli bong butterfly gateway drugs to elevate your good vibrations. Have you ever tried Lorem Ipsum on Weeeeeeeeeeed? Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart.\nHydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Optimizing dime bags of pre-rolled honey oil dabs. Oh my gawd, they like totally know I'm high. Dude you’re just being paranoid, don’t call the cops."
    ),
    new Post(
      "3b9777c3-26ab-4468-ad63-7d660bbfff71",
      "Your 420 Guide to Cannabis Concentrates",
      "Timothy Founderman",
      "Thu Sep 02 2021 10:54:30 GMT-0700",
      "https://blackbirdgo.com/wp-content/uploads/2021/04/concentrates_bloghero-01-1024x577.png",
      "Broccoli bong butterfly gateway drugs to elevate your good vibrations. Oh my gawd, they like totally know I'm high. California kush roll it up into a fat blunt for medicinal purposes to elevate your consciousness. Extremely dope chronic eye drops in the basement with psychedellic nugs. Hydroponic nacho pop-tarts tetrahydrocannabinol hybrid schwag stems and seeds little orange hairs.\nIndica is like ‘in da couch’ like straight couch lock chasing waterfalls and milkers straight to your dome. Rolling down the street smoking endo, laid back. Just give us the whizzaa! Fully man, keif gummies are the indoor equivalent of body high super mellow. Optimizing dime bags of pre-rolled honey oil dabs.\nLegalize spliffs for recreational Snoop Dogg edibles pusher cannabidiol cartoons. Littering and butter stuff more cerebral high couch lock Abba Zabba you my only friend. French inhale topical CBD lotion and binge watch Cheech and Chong. Make a quick pipe out of an apple and release the carb Purple Haze all around. Crystalized buds from trimming tasty weed pens THC sativa euphoric resinated dome piece.\nGuatemalan purple haze grown outdoors by ganja shaman. Pass the duchie Bob Marley this shatter is hella potent. The cannabis industry will gravity bong a cotton mouth pizza dipped in ranch. Dude you’re just being paranoid, don’t call the cops. Hot box at 4:20 the fatty dank endo doobie in a cashed roachclip, Bogart.\nToke up on the Pineapple Express with that sticky icky shotgun sensamillia. Rasta! OG grandaddy purps with notes of diesel. An ancient plant referenced biblically as the Holy Herb and gets your noggin’ rocked. Wake and bake indica hash at the dispensary in Oregon decriminalized."
    )
    
  ]

  constructor() { }

  getPosts(){
    return this.posts.slice();
  }

  getPost(uuid: string): any{
    
    const post = this.posts.find(
      (s) => {
        return s.uuid === uuid;
      }
    );
    return post;
  }

}






