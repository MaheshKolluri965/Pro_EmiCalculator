import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmiCalmodel } from 'src/emical.model';

@Injectable({
  providedIn: 'root'
})
export class EmiService {

  httpBaseUrl:string="http://localhost:9098/rest/api";

  constructor(private _emihttp: HttpClient) { }

  
  emiCalculator(emiCal: EmiCalmodel)
  {
    return this._emihttp.post(this.httpBaseUrl+"/customers/emi", emiCal);
  }

  emiInfo(emiDetails: EmiCalmodel){
    return this._emihttp.post(this.httpBaseUrl+"/customer/emi", emiDetails);
  }
}
