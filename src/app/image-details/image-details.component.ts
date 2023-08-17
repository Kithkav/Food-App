import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  selectedImageName: string | undefined;
  selectedImagePath: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedImageName = params['name'];

      // Check if the clicked image is "Pizza"
      if (this.selectedImageName === 'Pizza') {
        // Navigate to the blank page
        this.router.navigate(['/blank']);
      } else {
        const selectedImage = this.homeComponent.imagePaths.find(image => image.name === this.selectedImageName);
        this.selectedImagePath = selectedImage ? selectedImage.path : undefined;
      }
    });
  }
}
