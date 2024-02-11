import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../school.service'; // Assume SchoolService is a service for fetching and updating school data

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  schoolId!: number;
  school: any = {}; // Assume school is an object to hold school data
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.schoolId = params['id']; // Assume the school ID is passed in the route params
      this.getSchool(this.schoolId);
    });
  }

  getSchool(id: number) {
    this.schoolService.getSchoolById(id).subscribe(
      (data: any) => {
        this.school = data; // Fetch school data from the service
      },
      (      error: any) => {
        console.log('Error fetching school data:', error);
      }
    );
  }

  editSchool() {
    this.isEditing = true;
  }

  saveSchool() {
    this.schoolService.updateSchool(this.schoolId, this.school).subscribe(
      (data: any) => {
        console.log('School updated successfully:', data);
        this.isEditing = false;
      },
      (      error: any) => {
        console.log('Error updating school:', error);
      }
    );
  }

  cancelEdit() {
    this.getSchool(this.schoolId);
    this.isEditing = false;
  }
}
