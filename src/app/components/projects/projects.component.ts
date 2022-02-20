import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any = [
    {
      title: "Personal Website",
      link: "/",
      description: "The website you're currently on",
      mobilePic: "assets/Screenshots/Website - Mobile.png",
      webPic: "assets/Screenshots/Website - Web.png"
    },
    {
      title: "Into The Void",
      link: "/",
      description: "A mental health app for writing down thoughts and sending them to the void.",
      mobilePic: "assets/Screenshots/Website - Mobile.png",
      webPic: "assets/Screenshots/Website - Web.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
