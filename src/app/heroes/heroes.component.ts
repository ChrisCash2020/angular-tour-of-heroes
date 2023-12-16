import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  heroes: Hero[] = [];

  // create a optional selectedHero state that I will assign when a user selects a hero from the list
  selectedHero?: Hero;

  // to use a api service you need to declare a constructor and have the service as a private paramater
  // Reserve the constructor for minimal initialization such as wiring constructor parameters to properties.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  // this function is called after the HerosComponent is initialized
  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // function call to set the fetched data to the given frontend obj
  getHeroes(): void {
    // able to set asynchronous calls
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  /**
 if the service is using saved data
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

 */
}
