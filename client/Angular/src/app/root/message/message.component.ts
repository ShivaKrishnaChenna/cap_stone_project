import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/rest-api.service';
import { GlobalDataManager } from 'src/app/global-data-manager.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public data : GlobalDataManager) { }

  ngOnInit(): void {
  }

}
