import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
    tableForm: FormGroup;
    students: FormArray;

    constructor(private fb: FormBuilder) {
        this.tableForm = this.fb.group({
            students: this.fb.array([])
        });
    }

    ngOnInit(): void {
        this.students = this.fb.array([
            this.fb.group({
                firstName: ['india is our country'],
                lastName: ['']
            })
        ]);

        this.tableForm = this.fb.group({
            students: this.students
        });
        this.students.valueChanges.subscribe((values) => {
            console.log('Student values changed:', values);
        });
    }

    addStudent() {
        const studentFormGroup = this.fb.group({
            firstName: '',
            lastName: ''
        });
        this.students.push(studentFormGroup);
    }
}
