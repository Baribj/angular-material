import { Component } from '@angular/core';
import { DownloadAppBannerComponent } from '../download-app-banner/download-app-banner.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [DownloadAppBannerComponent, MatIconModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
