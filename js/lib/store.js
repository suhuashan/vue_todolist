const STORAGE_KEY_1 = 'todos-vue.js';
const STORAGE_KEY_2 = 'finishs-vue.js';
function fetch(index){
    if(index == 1){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY_1) || '[]');
    }else{
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY_2) || '[]');
    }
};
function save(items,index){
    if(index == 1){
        window.localStorage.setItem(STORAGE_KEY_1,JSON.stringify(items))
    }else{
        window.localStorage.setItem(STORAGE_KEY_2,JSON.stringify(items))
    }
}