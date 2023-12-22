import { Component, OnInit } from '@angular/core';
import { PetService } from '../../core/api/api/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/api/api/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AdoptionPageModalComponent } from '../adoption-page-modal/adoption-page-modal.component';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.scss'
})
export class PetDetailComponent implements OnInit {
  id!: number;
  animalDetails: any;
  authenticatedUserId!: number;
  loadedUser!:string | null
  constructor(private petService:PetService,
    private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog
    ){}
    ngOnInit(): void {
      
        this.loadedUser = this.authService.loadAuthenticatedUser();
        if (this.loadedUser !== null && this.loadedUser !== undefined) {
          this.authenticatedUserId = +this.loadedUser;
        }
      
      const idParam = this.route.snapshot.paramMap.get('id');
      this.id = idParam ? +idParam : 0;
      this.loadAnimalDetails();
      
      console.log(this.authenticatedUserId)
    }
    loadAnimalDetails(): void {
      this.petService.getAnimalDetails(this.id).subscribe(
        (data) => {
          this.animalDetails = data;
          
          console.log(this.animalDetails)
        },
        (error) => {
          console.error(error);
        }
      );
    }
    deletePost(animalId: number): void{
      const data = { animal_id: animalId };
      console.log(data)
      this.petService.deletePost(data.animal_id).subscribe(
        () => {
          console.log('Animal deleted successfully');
          this.router.navigate(['/dashboard']);
          
        },
        (error) => {
          console.error('Error deleting post', error);
        }
      );
    }
    openAdoptionModal(): void {
      const dialogRef = this.dialog.open(AdoptionPageModalComponent, {
        width: '800px', // Adjust the width as needed
        position: { top: '-50%', left: '25%' },
        backdropClass: 'modal-backdrop',
        data: { id: this.id },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Handle any actions after the modal is closed, if needed
      });
    }

}
