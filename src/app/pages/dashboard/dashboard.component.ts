import { Component, OnInit } from '@angular/core';
import { PetService } from '../../core/api/api/pet.service';
import { AuthService } from '../../core/api/api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  animals: any[] = [];
  constructor(private petService: PetService, private authService: AuthService, private router: Router){}
  private fetchAnimalData(): void {
    this.petService.getAnimals().subscribe(
      (animals) => {
        this.animals = animals;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit(): void {
    // Fetch initial animal data
    this.fetchAnimalData();
  }
  logout(): void {
    this.authService.logout().subscribe(
      response => {
        // Handle successful logout response
        this.router.navigate(['/login'])
        console.log('Logout successful', response);
        this.authService.removeUserId();
      },
      error => {
        // Handle error
        console.error('Logout failed', error);
      }
    );
  }
  addToFavorites(animalId: number): void {
    const data = { animal_id: animalId };
    this.petService.addFavorite(data).subscribe(
      () => {
        console.log('Animal added to favorites successfully');
        // You can update the local list if needed
      },
      (error) => {
        console.error('Error adding animal to favorites', error);
      }
    );
  }
}
