import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  hero?: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    // gets the id from the url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // uses a function from the hero service to fetch one hero obj by the given url id
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  // if I'm sending data from another component to this component through a element tag you need to annotate that prop with the keyword Input
  // its not needed since this component is a route page
  // @Input() hero?: Hero;
}
