import { Component, OnInit } from '@angular/core';
import { CompoundsService } from '../../services/compounds.service';
import {
  CompoundType,
  PageContent,
  PagerType,
} from 'src/app/models/compound-type';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCompounds?: CompoundType[] | null;
  pageOfItems = [];
  pager: PagerType | undefined;

  constructor(
    private compoundService: CompoundsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let page: undefined | number = undefined;
    this.route.queryParams.subscribe((params) => {
      page = params['page'];
      this.loadNewContent(page || 1);
    });
  }

  loadNewContent(page: number) {
    this.compoundService
      .getAllCompounds(page)
      .subscribe((compounds: PageContent | null) => {
        if (compounds) {
          this.pager = compounds.pager;
          this.allCompounds = compounds.pageOfItems;
        } else this.allCompounds = null;
      });
  }

  deleteCompound(id: number) {
    this.compoundService.deleteCompound(id).subscribe((resp) => {
      this.loadNewContent(this.pager!.currentPage);
    });
  }
}
