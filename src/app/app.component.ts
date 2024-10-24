import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  language:String =""
  listOfLanguages:String[] = ["English","Hindi","Spanish"]
  addLanguage(){
    console.log("addLanguage() is called")
    this.listOfLanguages.push(this.language)
    console.log(this.listOfLanguages)
    this.language = ""
  }
  deleteFirst() {
    // this.listOfLanguages.shift()
    //or you can use splice()
    this.listOfLanguages.splice(0,1)
  }
}
