import { Component, OnInit } from '@angular/core';
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faGithub = faGithub
  faTwitter = faTwitter

  constructor() { }

  ngOnInit(): void {
  }

}
