
new Vue({
    el:"#app",
    data(){
        return{
          title:'todoList',
          todolist_item:'',
          todolist_items:fetch(1),
          finishedlist_items:fetch(0),
          contentStatus:false,
          showDeleteStatus:false,
          showRewriteStatus:false,
          index:0,
          num:0,
          textareaContent:''
        }
      },
      watch:{
        todolist_items:{
          handler(todolist_items){
            save(todolist_items,1);
          },
          deep:true
        },
        finishedlist_items:{
          handler(finishedlist_items){
            save(finishedlist_items,0);
          },
          deep:true
        }
      },
      methods:{
        addNewItem(){
            if(this.todolist_item==""){
                this.contentStatus = true;
            }else{
                console.log(111);
                this.todolist_items.push(
                    {
                        label:this.todolist_item,
                        status:false
                    }
                );
                this.todolist_item = '';
            }
        },
        changeTodoListStatus(item,index){
          this.finishedlist_items.push(
            {
              label:item.label,
              status:!item.status
            }
          )
          this.todolist_items.splice(index,1);
        },
        changeFinishedListStatus(item,index){
          this.todolist_items.push(
            {
              label:item.label,
              status:!item.status
            }
          )
          this.finishedlist_items.splice(index,1);
        },
        delete_list_item(index,num){
          this.showDeleteStatus = true;
          this.index = index;
          this.num = num;
        },
        rewrite_list_item(item,index,num){
          this.showRewriteStatus = true;
          this.index = index;
          this.num = num;
          this.textareaContent = item.label;
        },
        cancel(){
          this.contentStatus = false;
          this.showRewriteStatus = false;
          this.showDeleteStatus = false;
        },
        deleteConfirm(){
          this.showDeleteStatus= false;
          if(this.num == 0){
            this.todolist_items.splice(this.index,1);
          }else{
            this.finishedlist_items.splice(this.index,1);
          }
        },
        rewriteConfirm(){
          this.showRewriteStatus = false;
          if(this.num == 0){
              this.todolist_items[this.index].label = this.textareaContent;
          }else{
              this.finishedlist_items[this.index].label = this.textareaContent;
          }
          
          this.listItemContent = 
          console.log(this.textareaContent);
        },
        getDate(){
          var date = new Date();
          var month = date.getMonth() + 1;
          var day = date.getDate();
          month = month > 9 ? month : '0' + month;
          day = day > 9 ? day : '0' + day;
          return month + '-' + day;
        }
    }
})
