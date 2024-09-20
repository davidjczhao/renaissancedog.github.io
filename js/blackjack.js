let allCards=["2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS","AS","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH","AH",
"2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD","AD","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC","AC"]
class Hand {
  constructor() {
    this.cards=[]
    this.score=0
    this.aces=0
  }
  addCard(card) {
    this.cards[this.cards.length]=card
    let value = val(card)
    if (value==11) {
      this.aces++
    }
    this.score+=value
    q("cards").innerHTML=this.cardsToStr(this.cards)
    q("sum").innerHTML="Sum: "+this.score
  }
  check() {
    if (this.score>21) {

    } else if (this.score==21&&this.cards.length==2) {

    }
  }
  clear() {
    this.cards=[]
    this.score=0
    this.aces=0
  }
  cardsToStr(cards) {
    let str=""
    for (let i=0; i<cards.length; i++) {
      str+=cards[i]+' '
    }
    return "Cards: "+str
  }
}
class dealerHand extends Hand {
  addCard(card, phase) {
    this.cards[this.cards.length]=card
    let value = val(card)
    if (value==11) {
      this.aces++
    }
    this.score+=value
    q("dealerCard").innerHTML=this.cardsToStr(this.cards, phase)
  }
  cardsToStr(cards, phase) {
    //if phase is true, hide 2nd card
    let str=""
    for (let i=0; i<cards.length; i++) {
      if (phase&&i==1) {
        str+='?? '
      } else {
        str+=cards[i]+' '
      }
    }
    return "Dealer's cards: "+str
  }
}
class Game {
  constructor() {
    this.money=200
    this.cards=[...allCards]
    this.amt=10
  }
  getRandomCard() {
    let a=getRandomInt(0,this.cards.length)
    let c = this.cards[a]
    this.cards.splice(a, 1);
    console.log(c)
    return c
  }
  firstDeal() {
    this.hit()
    this.hit()
    this.dealerDraw(true)
    this.dealerDraw(true)
  }
  hit() {
    player.addCard(this.getRandomCard())  
  }
  dealerDraw(phase) {
    dealer.addCard(this.getRandomCard(), phase)  
  }
  stand() {
    while (dealer.score<17) {
      this.dealerDraw(false)
    } 
    if (dealer.score>21) {
      q("info3").innerHTML="Win"
    } else {
      q("info3").innerHTML="Lose"
    }
    q("info").innerHTML=dealer.cardsToStr(dealer.cards, false)
    q("info2").innerHTML="Dealer's Score: "+dealer.score
  }
  newGame() {

  }
} 
function start() {
  game=new Game()
  player=new Hand()
  dealer=new dealerHand()
  game.firstDeal()
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function q(id){
  return document.getElementById(id)
}
function val(c) {
  let ch=c.charAt(0)
  if (ch=='A'){
    return 11;
  }
  if (ch=='J'||ch=='Q'||ch=='K'){
    return 10;
  }
  if (ch=='1'){return 10;}
  return parseInt(ch)
}