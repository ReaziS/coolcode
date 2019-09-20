import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { KukoldService } from '../services/kukold.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-kukold',
  templateUrl: './add-kukold.component.html',
  styleUrls: ['./add-kukold.component.css']
})
export class AddKukoldComponent implements OnInit  {

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private kukoldService: KukoldService, private location: Location) { }
  public form: FormGroup;
  list: FormArray;
  public ingredients = ['Kostia', 'Katya', 'Kolya', 'Vlad', 'Kom', 'Dima', 'Pavlik', 'Leha'];
  ngOnInit() {
    this.form = this.fb.group({
      list: this.fb.array([ this.createItem() ]),
      partyName: ''
    });
  }
  public createItem(): FormGroup {
    return this.fb.group({
      name: '',
      counter: 0
    });
  }
  addItem(): void {
    this.list = this.form.get('list') as FormArray;
    this.list.push(this.createItem());
  }

  addSquad(): void {
    console.log(this.form.getRawValue());
    this.kukoldService.addSquad(this.form.getRawValue()).subscribe(_ => this.back());
  }
  back(): void {
    this.location.back();
  }
}
