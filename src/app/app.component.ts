import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryLinks = [
    {
      title: 'Landing',
      icon: 'marengo-dashboard',
      link: '/landing'
    },
    {
      title: 'Widgets',
      icon: 'marengo-collection',
      link: '/widgets'
    },
    {
      title: 'Object View',
      icon: 'marengo-list',
      link: '/objectView'
    }
  ];

  footerLinks = [
    {
      title: 'Corporate Information',
      href: 'http://www.siemens.com/corporate_info'
    },
    {
      title: 'Privacy Policy',
      href: 'http://www.siemens.com/privacy'
    },
    {
      title: 'Terms of Use',
      href: 'http://www.siemens.com/corp/en/index/terms_of_use.htm'
    }
  ];

}
