import { Component, OnInit } from '@angular/core';
import { CardTemplate } from 'app/shared/interfaces/project.interface';

@Component({
  selector: 'cv-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: Array<CardTemplate> = [];
  constructor() {

    this.articles = [
      {
        url: 'https://mystudentvoices.com/work-study-no-rest-ce8f5f5e56db',
        img: '../../assets/Images/article_1.png',
        title: 'Work, Study, No Rest',
        description: 'My first year working and studying'
      },
      {
        url: 'https://hackernoon.com/semantic-web-is-dead-long-live-the-ai-2a5ea0cf6423',
        img: '../../assets/Images/article_2.png',
        title: 'Semantic Web is Dead, Long live the AI!!!',
        description: 'Some reflections on Semantic Web'
      },
      {
        url: 'https://hackernoon.com/full-stackers-suit-up-bcfd5c7a026f',
        img: '../../assets/Images/article_3.png',
        title: 'Full Stackers, Suit UP!',
        description: 'A list I made of useful applications'
      },
      {
        url: 'https://hackernoon.com/winds-of-change-an-healthcare-evolution-bd506730013f',
        img: '../../assets/Images/article_4.png',
        title: 'Winds of Change: The Healthcare Evolution',
        description: 'Some reflections on healthcare IT'
      }
    ];
   }

  ngOnInit() {
  }

}
