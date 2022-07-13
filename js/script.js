console.log('vue Ok' , Vue);

Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : 
    {
        tasks:[
            {
                text: 'Fare la spesa ',
                done: true,
            },
            {
                text: 'Fare il bucato ',
                done: false,
            }

        ]
    },
    computed:{},
    methods :{
        crossTask(index){
            this.tasks[index].done = !this.tasks[index].done
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
    }
});
