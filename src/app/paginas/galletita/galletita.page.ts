import { Component, OnInit } from '@angular/core';
import {WordpressApiService} from '../../services/wordpress-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-galletita',
  templateUrl: './galletita.page.html',
  styleUrls: ['./galletita.page.scss'],
})
export class GalletitaPage implements OnInit {

  post: any;  
  constructor(private route: ActivatedRoute, private wp: WordpressApiService) { }
  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.post = res;
    });
  }
  openOriginal(){
    window.open(this.post.link,'_blank');
  }
  

}
