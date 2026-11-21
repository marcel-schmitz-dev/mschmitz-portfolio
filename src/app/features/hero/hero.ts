
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  protected readonly name = 'Marcel Schmitz';

  protected readonly profession = 'Fullstack Webentwicklung';

  protected readonly introduction =
    'Ich entwickle moderne Webanwendungen und erweitere kontinuierlich meine Kenntnisse in der Frontend- und Backend-Entwicklung.';

}

