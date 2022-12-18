import { Component } from '@angular/core';
import {StartupInterface} from "../../../interfaces/startup.interface";

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent {
  public title:string = 'machine learning';
  public startups: StartupInterface[] = [{
    startupUrl: 'ai',
    startupName: 'ai',
    startupImage: 'https://images.pexels.com/photos/14453703/pexels-photo-14453703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }];
  constructor() {
  }

}
