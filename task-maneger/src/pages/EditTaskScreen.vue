<template>



  <div  class="process">


         <div class="process_img">
           <img :src="logoForm" alt="logo dark">
         </div>
         <div class="imput_box field_box">
           <div class="field_box_title">Title *</div>
           <input v-model="editableTask.title" class="input_box__input" type="text" placeholder="Enter Title">
         </div>

           <button class="btm add" @click="saveChanges">
             Done
           </button>
           <button class="btm delet" @click="DleteteTodo">
             Delete
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
    editableTask:{ ...this.task},

   };
 },
 props:{

  task:{
      type:Object,
      required:true,
  },

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
 },

 methods: {
 saveChanges(){
this.$emit('update-task', this.editableTask);
this.cancelTodo();
 },
 DleteteTodo(){
           const newValue = 'todo';
           this.$emit('custom-event',newValue );
           this.$emit('remove-task', this.editableTask)

     },
     cancelTodo(){
           const newValue = 'todo';
           this.$emit('custom-event',newValue )

     },
 },
 watch:{
  task:{
    immediate: true,
    handler(newTask){
      this.editableTask ={ ...newTask};
    },
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
