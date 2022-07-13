console.log('vue Ok' , Vue);

Vue.config.devtools = true;

const app = new Vue({
    el : '#root',
    data : tasks[
        {
            text: 'Fare la spesa ',
            done: true,
        },
        {
            text: 'Fare il bucato ',
            done: false,
        }

    ]
});
console.log('vue Ok' , Vue);