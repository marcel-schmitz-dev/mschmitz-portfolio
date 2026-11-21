
import { Component } from '@angular/core';
import { SiteHeader } from '../site-header/site-header';
import { Hero } from '../../features/hero/hero';

@Component({
  selector: 'app-portfolio-shell',
  imports: [SiteHeader, Hero],
  templateUrl: './portfolio-shell.html',
  styleUrl: './portfolio-shell.scss',
})
export class PortfolioShell {}

