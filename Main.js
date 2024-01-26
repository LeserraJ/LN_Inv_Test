class WorkOut {
        constructor(rep, set, weight, excercise) {
                this.rep = rep;
                this.set = set;
                this.weight = weight;
                this.excercise = excercise;
        }

        NewWorkout(){
                console.log('The Workout today is ${this.excercise}')
        };
        
}


const test1 = new WorkOut ("")

export{WorkOut};


console.log("Live Reload");