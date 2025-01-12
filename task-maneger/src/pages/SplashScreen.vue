<template>
    <div id="app" class="splash-screen">
      <div class="phone">
        <div class="header" :class="{ white: showScreen !== 'start'}">
      <div class="heder__time">9:41</div>
      <div class="phone__icons">
        <img :src="imageUrl" alt="icons">
      </div>
    </div>
        <div v-if="showScreen === 'start'" class="start_sreen">
         
        <div class="start_screen__corners" ></div>
        <div class="start_screen__corners2" ></div>
        <img :src="Logo" alt="" class="logo">


        <div class="start_sceen_content conteiner2">
          <div class="start_screeen_greeting">
            <h1>Make successful <br> your day</h1>
            <p>Make small somethings to get big gift <br> in your life</p>
          </div>
          <button class="btm add start" @click="navigateToHome">start</button>
        </div>

       </div>
       
        <div v-if="showScreen !== 'start'" class="todo_sreen" >
          <div class="todos__header">
          <div class="todos_screen_back" @click="goToStart">
            <img :src="arrow" alt="back">
            <span>Back</span>
          </div>
          <h2>{{screenName}}</h2>
        </div>

          <div v-if="showScreen === 'todo'" >
          
          <todos-screen 
           :creenshow="showScreen"
           :screen="screenName"
           @update-name="updateName"
          />
          </div>
          
        </div>

       
      
    </div>
  </div>
  </template>
  
  <script>
  import TodosScreen from './Todos.vue';

  import imageUrl from
  '@/components/icons/Levels.png'
  import Logo from
  '@/components/icons/Logo.png'
  import arrow from
  '@/components/icons/Chevron.png'

  export default {
    name: 'SplashScreen',
  components: {TodosScreen},
    data(){
      return{
        showScreen: 'start',
        imageUrl,
        Logo,
        arrow,
        screenName: 'Tasks',
      }
    },
    methods: {
      updateName(newValue){
        this.screenName = newValue;
      },
      navigateToHome() {
        this.showScreen = 'todo';
      },
      goToStart() {
        this.showScreen = 'start';
      },
    },
  };
  </script>
  
  <style scoped>
  #app{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.phone{
    width: 100%;
    max-width: 390px;
    height: 850px;
    background: #F6F5F8;
    position: relative;
    overflow: hidden;

    
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #51C9E4;
    padding-left: 52px;
    z-index: 3;
    position: relative;
   
}
.white{
  background: #fff;
}

.start_screeen_greeting{
    text-align: center;
    margin-top: 450px;
}
.start_screeen_greeting h1{
font-size: 32px;
font-weight: 600;
line-height: 38.73px;


}

.start_screeen_greeting p{
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
}
.todos__header{
    padding: 11px 8px;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #999;
}

.todos__header h2{
    width: 85px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    margin-left: 65px;
}

.todos_screen_back{
    display: flex;
    align-items: center;
    font-size: 17px;
    color: #007AFF;
    gap: 5px;
    width: 85px;
    
 
}
.start_screen__corners{
    position: absolute;
    top: -250px;
    left: -75px;
    content: '';
    width: 540px;
    height: 540px;
    background: #51c7e2;
    transform: rotate(60deg);
    border-radius: 30px;
    z-index: 2;
}
.start_screen__corners::after,::before{
    position: absolute;
    content: '';
    width: 540px;
    height: 540px;
    border-radius: 30px;
    z-index: 0;
    
}
.start_screen__corners::before{
    background: #39c1df;
    transform: rotate(75deg);
    
}
.start_screen__corners::after{
    background: #1ab8db;
    transform: rotate(-30deg);
    
    
}
.start_screen__corners2{
    position: absolute;
    top: -250px;
    left: -75px;
    content: '';
    width: 540px;
    height: 540px;
    background: #39c1df;
    transform: rotate(45deg);
    border-radius: 30px;
    z-index: 1;
  }

.logo{
  z-index: 3;
  position: absolute;
  top: 150px;
  left: 145px;
}
.hide
{
  display: none;
}


  </style>
  