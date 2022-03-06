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
      pic: "assets/Screenshots/Website.png"
    },
    {
      title: "Timeblocking app",
      link: "/",
      description: "A productivity app to fill out your day with tasks that syncs with Google Calendar.",
      pic: "assets/Screenshots/Website.png"
    },
    {
      title: "Into The Void",
      link: "https://github.com/bobbypinard/into-the-void",
      description: "A mental health app for writing down thoughts and sending them to the void.",
      pic: "assets/Screenshots/ITV.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
