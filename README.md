<template>
     <div class="process">
            <div class="process_img">
              <img :src="logoForm" alt="logo dark">
            </div>
            <div class="imput_box field_box">
              <div class="field_box_title">Title *</div>
              <input v-model="editableItem.title" class="input_box__input" type="text" placeholder="Enter Title">
            </div>
           
              <button class="btm add" @click="saveChanges">
                Done
              </button>
              <button class="btm delet" @click="saveChanges">
                Delete
              </button>

          </div>
  </template>
  
  <script>
  import logoForm from
  '@/components/icons/logo_form.png'
  export default {
    props:{
        selectedItem:{
          type: Object,
          default: null,
        },
        localCren:{
      type: String,
      required:true,
    }
    },
    data() {
      return {
        editableItem: null,
        logoForm,
      };
    },
    watch:{
      selectedItem:{
        immediate:true,
        hendler(newItem){
          this.editableItem = newItem ? {...newItem } :null;
        }
      }
    },
    
    
    methods: {
     
      saveChanges(){
        this.$emit('update-item', this.editableItem);
    
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
  