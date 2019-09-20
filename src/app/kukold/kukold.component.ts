import { Component, OnInit } from '@angular/core';
import { Kukold } from '../models/Kukold';
import { Observable } from 'rxjs';
import { KukoldService } from '../services/kukold.service';
@Component({
  selector: 'app-kukold',
  templateUrl: './kukold.component.html',
  styleUrls: ['./kukold.component.css']
})
export class KukoldComponent implements OnInit {
  constructor(private kukoldService: KukoldService) { }
  kukolds: Kukold[];
  currentKukold: Kukold;
  public squads;
  ngOnInit() {
    this.getKukolds();
    this.getSquads();
  }
  getKukolds(): any {
    this.kukoldService.getKukolds().subscribe(kukolds => {
      console.log(kukolds);
      this.kukolds = kukolds;
    });
  }

  getSquads(): any {
    this.kukoldService.getSquads().subscribe(squads => {
      console.log(squads);
      this.squads = squads;
    });
  }

}
