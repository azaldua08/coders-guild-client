import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-bulk-create',
  templateUrl: './bulk-create.component.html',
  styleUrls: ['./bulk-create.component.css']
})



export class BulkCreateComponent implements OnInit {
  csvContent: string;
  defaultAvatar = 'https://bootdey.com/img/Content/avatar/avatar2.png';
  emp = new Employee('', '', '', '', '', '', 'Active', this.defaultAvatar, 'USER', '2014-07-20');
  employees = new Array<Employee>();
  fileReader = new FileReader();
  fileToRead: File;
  success: boolean;
  error: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {

      console.log('Filename: ' + files[0].name);
      console.log('Type: ' + files[0].type);
      console.log('Size: ' + files[0].size + ' bytes');


      this.fileToRead = files[0];

      // https://stackoverflow.com/questions/35789498/new-typescript-1-8-4-build-error-build-property-result-does-not-exist-on-t
      this.fileReader.onload = (fileLoadedEvent: any) => {

        const csv = fileLoadedEvent.target.result;
        const lines = csv.split('\n');
        const headers = lines[0].split(',');
        console.log('lin len: ' + lines.length);
        if (this.employees.length > 0) {
          this.employees.length = 0;
        }
        for (let i = 1; i < lines.length; i++) {
          const data = lines[i].split(',');
          this.emp.name = data[0];
          this.emp.email = data[1];
          this.emp.username = data[2];
          this.emp.password = data[3];
          this.emp.guild = data[4];
          this.emp.jobClass = data[5];
          this.emp.status = data[6];
          this.emp.joinDate = data[7];
          for (let j = 0; j < data.length; j++) {
            console.log(data[j]);
          }
          this.employees.push(this.emp);
          this.emp = new Employee('', '', '', '', '', '', 'Active', this.defaultAvatar, 'USER', '2014-07-20');
        }
        console.log(this.employees);
        if (this.error !== undefined && this.error.length > 0) {
          this.error = '';
        }
        if (this.success) {
          this.success = false;
        }
        this.data.bulkCreateEmployee(this.employees).subscribe(
          data => console.log(data),
          error => this.handleAuthError(error),
          () => {
            this.success = true;
          });
        // console.log('CSV: ' + this.csvContent);
      };


    }
  }

  bulkCreate() {
    this.fileReader.readAsText(this.fileToRead, 'UTF-8');
  }

  private handleAuthError(err: HttpErrorResponse) {
    // handle your auth error or rethrow
    if (err.status === 500 || err.status === 400) {
      console.log('handled error ' + err.status);
      this.setError(err.error);

    }
    throw err;
  }

  setError(error) {
    this.error = error;
  }

}

