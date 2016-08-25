import {Component} from '@angular/core';
import {ExhibitTabPage} from '../exhibit/exhibitTab';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {ArtworksPage} from '../artworks/artworks';
import {NavigationPage} from '../navigation/navigation';
import {SearcherPage} from '../searcher/searcher';
import {OtherPage} from '../other/other';



@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private exhibitTab: any;
  private artworksTab: any;
  private navigationTab: any;
  private searcherTab: any;
  private otherTab: any;
  

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    // this.tab1Root = HomePage;
    // this.tab2Root = AboutPage;
    // this.tab3Root = ContactPage;
    this.exhibitTab=ExhibitTabPage;
    this.artworksTab=ArtworksPage;
  this.navigationTab=NavigationPage;
  this.searcherTab = SearcherPage;
  this.otherTab= OtherPage;
  }
}
