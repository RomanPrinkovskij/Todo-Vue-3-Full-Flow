<template>
  <div class="process">
         <div class="process_img">
           <img :src="logoForm" alt="logo dark">
         </div>
         <div class="imput_box field_box">
           <div class="field_box_title">Title *</div>
           <input v-model="newTodo.title" class="input_box__input" type="text" placeholder="Enter Title">
         </div>
        
           <button class="btm add" @click="addTodo">
             Add Task
           </button>
           <button class="btm delet" @click="cancelTodo">
             Cancel
           </button>

       </div>
</template>

<script>
import logoForm from
'@/components/icons/logo_form.png'

export default {
 data() {
   return {
     logoForm,
     newTodo:{
             userId: '',
             id: '',
             title: "",
             completed: false,
           },
   };
 },
 props:{
    task_list:{
      
      type: Array,
      default(){
        return []
      }
    },
    localCren:{
      type: String,
      required:true,
    }
 }
, 
 
 methods: {
  addTodo(){
     const newItem ={
        userId:10,
        id:this.task_list.leight+1,
        title: this.newTodo.title,
        completed: this.newTodo.completed,
     };
     this.$emit('add-item', newItem);
        
         this.newTodo = {
           userId: '',
             id: '',
             title: "",
             completed: false,
           };
       this.cancelTodo();
   },
   cancelTodo(){
           const newValue = 'todo';
           this.$emit('custom-event',newValue )
 
     },
 },
};
</script>

<style>
.process{
 display: flex;
 flex-direction: column;
 gap: 16px;
}

.process_img{
 margin: 52px auto 36px;
}



.field_box_title{
 font-size: 14px;

}

.input_box__input{
 padding: 12px 16px;
 border-radius: 8px;
 border: 1px solid #1E212633

}

.input_box__input::placeholder{
 color: #888889;
}
.field_box{
 display: flex;
 flex-direction: column;
 gap: 4px;
}
</style>
