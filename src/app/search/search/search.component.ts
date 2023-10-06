import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: String = "";
  constructor(private route: ActivatedRoute, private router:Router) { }

  // checking if item on the site
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  // searching method
  search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }

}
