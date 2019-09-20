import { Component, OnInit, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KukoldService } from '../services/kukold.service';
import { Kukold } from '../models/Kukold';

@Component({
  selector: 'app-current-party',
  templateUrl: './current-party.component.html',
  styleUrls: ['./current-party.component.css']
})
export class CurrentPartyComponent implements OnInit {

  constructor(private kukoldService: KukoldService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
  kukolds: Kukold[];
  currentSquad: any;
  currentKukold: Kukold;
  public squads;
  public dis = true;
  ngOnInit() {
    this.getSquads();
    this.getSquad();
  }
  getSquads(): any {
    this.kukoldService.getSquads().subscribe(squads => {
      console.log(squads);
      this.squads = squads;
    });
  }
  getSquad(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.kukoldService.getSquad(id)
    .subscribe(currentSquad => {
      this.currentSquad = currentSquad;
      this.kukolds = this.currentSquad.list;
      this.cdr.markForCheck();
    });
  }
  changeKukold(): any {
    this.dis = false;
    document.getElementById('dis').style.opacity = '0.2';
    setTimeout(() => {
      this.dis = true;
      document.getElementById('dis').style.opacity = '1';
    }, 10000);
    this.kukoldService.checkAbility().subscribe(ability => {
      console.log(ability);
      if (ability === true) {
        console.log(this.kukolds);
        this.kukolds[0].counter++;
        this.currentKukold = this.kukolds[0];
        this.kukolds.shift();
        this.kukolds.push(this.currentKukold);
        this.kukoldService.changeKukold(this.currentSquad._id, this.kukolds).subscribe(newKukoldList => {
          this.kukolds = newKukoldList;
          this.cdr.markForCheck();
        });
      } else {
        this.getSquad();
        document.getElementById('chosenKukold').style.display = 'flex';
        setTimeout(() => {
          document.getElementById('chosenKukold').style.display = 'none';
        }, 3000);
      }
    });
  }
}
