import { Employee } from './models/employee.model';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
      remark: this.fb.control(''),
    });
  }

  addEmployee() {
    // let employee: Employee = {
    //   remark : this.remark.value;
      // empId : this.empId.value,
      // joinDate: this.joinDate.value,
      // lastname: this.LastName.value,
      // birthdate: this.BirthDay.value,
      // gender: this.Gender.value,
      // education: this.educationOptions[parseInt(this.Education.value)],
      // company: this.Company.value,
      // jobExperience: this.JobExperience.value,
      // salary: this.Salary.value,
      // profile: this.fileInput.nativeElement.files[0]?.name,
    // };
  }

  public get EmpId(): FormControl {
    return this.employeeForm.get('empId') as FormControl;
  }
  public get JoinDate(): FormControl {
    return this.employeeForm.get('joinDate') as FormControl;
  }
  public get EmpName(): FormControl {
    return this.employeeForm.get('empName') as FormControl;
  }
  public get DateofBirth(): FormControl {
    return this.employeeForm.get('dateofBirth') as FormControl;
  }
  public get Rank(): FormControl {
    return this.employeeForm.get('rank') as FormControl;
  }
  public get Department(): FormControl {
    return this.employeeForm.get('department') as FormControl;
  }
  public get Gender(): FormControl {
    return this.employeeForm.get('gender') as FormControl;
  }
  public get Phone(): FormControl {
    return this.employeeForm.get('phone') as FormControl;
  }
  public get Email(): FormControl {
    return this.employeeForm.get('email') as FormControl;
  }
  public get Address(): FormControl {
    return this.employeeForm.get('address') as FormControl;
  }
  public get Remark(): FormControl {
    return this.employeeForm.get('remark') as FormControl;
  }
  public get Interest(): FormControl {
    return this.employeeForm.get('interest') as FormControl;
  }
}
