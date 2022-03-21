import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
  score = 0;

  incremente(){// incrémenter score +1
    this.score = this.score+1;
  }
  decremente(){// décrémenter score -1
    this.score = this.score-1;
  }
}
