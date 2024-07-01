
import { Component, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortEvent } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-fundmgrmaint',
  standalone: true,
  imports: [InputGroupModule, InputGroupAddonModule, InputTextModule, TableModule, CommonModule, FormsModule, DropdownModule, PanelModule,  ButtonModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './fundmgrmaint.component.html',
  styleUrls: ['./fundmgrmaint.component.css']
})
export class FundmgrmaintComponent implements OnInit {
  value: string | undefined;

  first = 0;


  cities: City[] | undefined;

    selectedCity: City | undefined;

  tableData = [
    { name: 'ME', country: '7GDA1', company: 'A', representative: '0000 0000' },
    { name: 'ME', country: '7GDA2', company: 'B', representative: '0000 0000' },
    { name: 'ME', country: '7GDA3', company: 'E', representative: '0000 0000' },
    { name: 'ME', country: '7GDA4', company: 'C', representative: '0000 0000' },
    { name: 'ME', country: '7GDB1', company: 'D', representative: '0000 0000' },
    { name: 'ME', country: '7GDB2', company: 'F', representative: '0000 0000' },
    { name: 'ME', country: '7GDB3', company: 'G', representative: '0000 0000' },
    { name: 'ME', country: '7GDB2', company: 'H', representative: '0000 0000' },
    { name: 'ME', country: '7GDB4', company: 'I', representative: '0000 0000' },
    { name: 'ME', country: '7GDA1', company: 'J', representative: '0000 0000' },
    { name: 'ME', country: 'Mexico', company: 'K', representative: '0000 0000' },
    { name: 'Mia Gonzalez', country: 'Argentina', company: 'L', representative: 'Leo' },
    { name: 'Ethan Hernandez', country: 'Colombia', company: 'M', representative: 'Maya' },
    { name: 'Charlotte Lee', country: 'South Korea', company: 'N', representative: 'Nick' },
    { name: 'Daniel Walker', country: 'Japan', company: 'O', representative: 'Olivia' },
    { name: 'Sophia Hall', country: 'India', company: 'P', representative: 'Parker' },
    { name: 'William Young', country: 'China', company: 'Q', representative: 'Quinn' },
    { name: 'Amelia King', country: 'South Africa', company: 'R', representative: 'Riley' },
    { name: 'James Wright', country: 'Russia', company: 'S', representative: 'Sam' },
    { name: 'Olivia Scott', country: 'Turkey', company: 'T', representative: 'Tom' },
    { name: 'Benjamin Adams', country: 'Egypt', company: 'U', representative: 'Uma' },
    { name: 'Avery Nelson', country: 'Greece', company: 'V', representative: 'Victor' },
    { name: 'Jackson Perez', country: 'Peru', company: 'W', representative: 'Will' },
    { name: 'Harper Sanchez', country: 'Chile', company: 'X', representative: 'Xena' },
    { name: 'Jack Roberts', country: 'Netherlands', company: 'Y', representative: 'Yara' },
    { name: 'Lily Carter', country: 'Sweden', company: 'Z', representative: 'Zack' }
  ];



  ngOnInit() {
    this.cities = [
        { name: 'Fund Manager', code: 'NY' },
        { name: 'Fund Manager Name', code: 'RM' },
        { name: 'Class', code: 'LDN' },
        { name: 'Compensation Rate', code: 'IST' },
    ];

    
}


}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

