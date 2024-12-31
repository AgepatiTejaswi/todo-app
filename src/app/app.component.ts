import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){

  }
  taskList: any=[];
  ngOnInit(){
    if(localStorage.getItem("taskData9")!==null){
      //data2=
    this.taskList=((JSON.parse((localStorage.getItem("taskData9"))|| "[]")) );
    console.log("NgOnint",this.taskList);
  }
  }
  title = 'todo-app';
  //itemsList=["1","2","dar","ytr","1","2","dar","ytr"]
 
    task: '' | undefined
    
    //completed: false
  
  
  
  submitTask(data:NgForm){
this.taskList.push(
  {task:data.value.task, completed: false}
 
  );
localStorage.setItem("taskData9",JSON.stringify(this.taskList));
data.reset();
  }

  deleteTask(index: any){
    console.log(index,this.taskList)
    
    this.taskList.splice(index,1);
localStorage.setItem("taskData9",JSON.stringify(this.taskList));
  }

  editTask(editedData:any){
    //console.log(editedData)
  //  const dataField= document.getElementById('task')
  //  if(dataField !=null){
  //   dataField.['value']=editedData.task;
  //  }
  (<HTMLInputElement>document.getElementById('task')).value=editedData.task;
  (<HTMLInputElement>document.getElementById('completed')).value=editedData.completed;
   
  }
  completeTask(index:any){
    this.taskList[index].completed= !this.taskList[index].completed;
    localStorage.setItem("taskData9",JSON.stringify(this.taskList));

  }

}
