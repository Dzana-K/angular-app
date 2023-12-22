import { Component, OnInit } from '@angular/core';
import { PetService } from '../../core/api/api/pet.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];
  constructor(private petService: PetService){}
  ngOnInit(): void {
    this.petService.getFavorites().subscribe(
      (response) => {
        this.favorites = response;
      },
      (error) => {
        console.error('Error fetching favorites', error);
      }
    );
  }
  deleteFavorites(animalId: number): void{
    this.petService.deleteFavorite(animalId).subscribe(
      () => {
        console.log('Animal deleted from favorites successfully');
        this.favorites = this.favorites.filter(favorite => favorite.animal.id !== animalId);
      },
      (error) => {
        console.error('Error deleting animal to favorites', error);
      }
    );
  }
}
