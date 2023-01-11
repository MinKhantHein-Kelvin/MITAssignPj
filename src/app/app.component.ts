import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  employeeForm: FormGroup;
  rankOptions = [
    'Manager',
    'Senior',
    'Junior',
    'Intern',
  ];
  departmentOptions = [
    'Sales',
    'HR',
    'SDD',
    'Network',
  ];

  constructor(private fb: FormBuilder, private _ngZone: NgZone){
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      empId: this.fb.control(''),
      joinDate: this.fb.control(''),
      empName: this.fb.control(''),
      dateofBirth: this.fb.control(''),
      rank: this.fb.control('default'),
      department: this.fb.control('default'),
      gender: this.fb.control(''),
      interest: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      address: this.fb.control(''),
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
