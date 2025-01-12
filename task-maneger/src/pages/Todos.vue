<template>
    <div v-if="localCreenShow === 'todo'" class="home-screen">
      <div class="todos conteiner">
      <ul class="todos_tabs">
           <li v-for="tab in computedTabs" class="todo_tab"
            @click="selectTab(tab)" 
            :key="tab.id"
            :class="{
              selected: selectedTab === tab.id
           }">
              <span>{{tab.name}}

              </span>
              <span>{{tab.counter}}

              </span>
           </li>
          </ul>
     
      <ul class="todos_list">
        <li v-for="task in filteredTasks" :key="task.id"  class="todos_item">
          <div class="todos_title" @click="selectTask(task)">
                {{task.title}}
              </div>

          <div class="todos_check">
            <input 
            :id="task.id"
            type="checkbox" 
            v-model="task.completed"
            
          />
          <label :for="task.id"></label>
              </div>
         
          
          
        </li>
      </ul>
    </div>
    <div class="todo_sreen__add_btn" @click="goToAdd">
            <img :src="Plus" alt="plus">
          </div>
  </div>

  <div v-if="localCreenShow === 'add'" class="todo_sreen__add conteiner2">
          <add-task-screen
          
         v-model="localCreenShow"
          @custom-event="changeScren"
          :task_list="tasks"
          @add-item="addItem"
          
          />
  </div>

  <div v-if="localCreenShow === 'edit'" class="todo_sreen__add conteiner2">
          <edit-task-screen
          v-model="localCreenShow"
          @custom-event="changeScren"
          :task_list="tasks"
          :task = "selectedTask"
           @update-task="updateTask"
         @remove-task="removeTask"
          
          />
  </div>
  <div v-if="showModification" class="delet_notification">
        <span class="massage">Task Deleted</span>
        <button class="close-btn" @click="hiddeDeletModification">&times;</button>
    </div>
  </template>
  
  <script>
  import EditTaskScreen from './EditTaskScreen.vue';
  import AddTaskScreen from './AddTaskScreen.vue';
    import Plus from
  '@/components/icons/🦆 icon _plus_.png'
  export default {
    props:{
        creenshow:{
          type: String,
          required: true,
        },

      screen:{
          type: String,
          required: true,
        },
    },
    name: 'TodosScreen',
    components:{AddTaskScreen, EditTaskScreen},
    data() {
      return {
        selectedTask:null,
        selectedIndex:null,
        showModification: false,

        Plus,
        localCreenShow: this.creenshow,
        thiscrenn: this.screen,
        tasks: [],
        tabs:[
                {
                    id: 'all',
                    name:'All tasks',
                    counter : 0,
                },
                {
                    id: 'closed',
                    name:'Closed',
                    counter : 0,
                },
                {
                    id: 'open',
                    name:'Open',
                    counter : 0,
                },
              ],
              selectedTab: 'all',
      };
      
    },
    methods: {
      hiddeDeletModification(){
        this.showModification = false;
      },
      selectTask(task){
        this.selectedTask = { ...task};
        this.selectedIndex = task.id;
        this.fixScren();
      },
      removeTask(item){
        const index = this.tasks.findIndex(el => el.id === item.id);
        this.tasks.splice(index, 1);
        this.showModification = true;
      },
      updateTask(updatedTask){
        const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);
      this.tasks[taskIndex] = updatedTask;
      },
      selectTab(tab){
            this.selectedTab = tab.id
        },
      toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) task.completed = !task.completed;
      },
      goToAdd(){
        this.localCreenShow = 'add';
        this.thiscrenn = 'Add Task';
        this.$emit('update-name', this.thiscrenn);

      },
      changeScren(){
        this.localCreenShow = 'todo';
        this.thiscrenn = 'Tasks';
        this.$emit('update-name', this.thiscrenn);

      },
      addItem(newItem){
        this.tasks.push(newItem);
      },
      fixScren(){
        this.localCreenShow = 'edit';
        this.thiscrenn = 'Edit Task';
        this.$emit('update-name', this.thiscrenn);
       
      },
    },
    
  
    async mounted() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        this.tasks = await response.json();
    },
    
  computed:{
    filteredTasks(){
            if(this.selectedTab === 'closed'){
                return this.tasks.filter(task => task.completed)
            }
            if(this.selectedTab === 'open'){
                return this.tasks.filter(task => !task.completed)
            }
            return this.tasks;
        },
    computedTabs(){
      
            return this.tabs.map(tab =>{
                if(tab.id === 'open'){
                  tab.counter =  this.tasks.filter(task => !task.completed).length;
                }else if(tab.id === 'closed'){
                    tab.counter =  this.tasks.filter(task => task.completed).length;
                }else{
                    tab.counter = this.tasks.length;
                }
                return tab;
            })
        },
    },
  
  };
  </script>
  
  <style>
::before{
  display: none;
}
  .conteiner{
    width: calc(100%-32px);
    margin: 0 auto;
}
.todos_tabs{
    margin-left: -24px;
    display: flex;
    gap: 32px;
}

.todo_tab{
    color: rgb(0, 13, 27, 0.24);
    font-size: 16px;
    display: flex;
    position: relative;
    cursor: pointer;
    gap:5px;
}
.todo_tab span:last-child{
    font-size: 12px;
    background: rgb(0, 13, 27, 0.24);
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4px;
}

.todo_tab:not(:last-child)::after{
position: absolute;
width: 1px;
height: 100%;
content: '';
background-color: rgb(0, 13, 27, 0.24);
right: -16px;
}

.selected{
    color: #007AFF;
}

.selected span:last-child{
    background: #007AFF;
}
.todos_list{
max-height: 480px;
overflow: auto;
list-style: none;
margin-left: -24px;

}

.todos_item{
    padding: 12px;
    background: #fff;
    border-radius: 12px;
    margin-bottom: 12px;
    box-shadow: 0px 4px 8px 0px #0000000A;
    position: relative;
    z-index: 1;
}

.todos_title{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
}


.todos_check{
    position: absolute;
    top: 12px;
    right: 12px;
    

}

.todos_check input{
    visibility: hidden;

}

.todos_check label{
    border-radius: 50%;
    border: 1px solid #C7C7CC;
    width: 20px;
    height: 20px;
    cursor: pointer;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 2;
}

.todos_check label::after{
    position: absolute;
    content: '';
    height: 4px;
    width: 9px; 
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    left: 4px;
    top: 5px;
    transform: rotate(-55deg) skew(-20deg);
}

.todos_check input:checked + label{
    background: #007AFF;
    border: 1px solid #007AFF;
}
.todo_sreen__add_btn{
position: absolute;
bottom: 20px;
right: 16px;
width: 62px;
height: 62px;
border-radius: 100%;
background: #1AB8DB;
box-shadow: 0px 4px 4px 0px #00000040;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}
.delet_notification{
    position: absolute;
    bottom: 95px;
    left: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
    border-left: 4px solid #d9534f;
}

.massage{
    flex-grow: 1;
    font-size: 16px;
    color: #333;
}

.close-btn{
    background: none;
    border: none;
    font-size: 18px;
    color: #333;
    cursor: pointer;
}
</style>