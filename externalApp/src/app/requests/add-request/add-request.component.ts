import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  files: File[] = [];
  disableDrop:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);

    this.readFile(this.files[0]).then((fileContents: any) => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);
    });
    
  }

  
  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
       reader.onload = e => {
        //return resolve((e.target as FileReader).result);
      };
       reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };
       if (!file) {
        console.error('No file to read.');
        return reject(null);
      }
  
      reader.readAsDataURL(file);
    });
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
