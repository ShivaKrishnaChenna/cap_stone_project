import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { Contact } from 'src/app/models/contact';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: Contact;

  constructor(private router: Router,  private route: ActivatedRoute,
    private service : RestApiService, private globalService : GlobalDataManager ) { }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  public saveContact(newContact: Contact): void{
    this.service.saveContact(newContact).then(
        response => {
          this.router.navigate(['user-login']);
        }
      );
  }

}
