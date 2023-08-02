import { Component } from '@angular/core';
import { EmiCalmodel } from 'src/emical.model';
import { EmiService } from '../emi.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emicalulator',
  templateUrl: './emicalulator.component.html',
  styleUrls: ['./emicalulator.component.css']
})
export class EmicalulatorComponent {

  emiRequest: EmiCalmodel = new EmiCalmodel();

  constructor(private _emiService: EmiService) { }

  public emi_int_amout = 0;
  public emi_total_amount = 0;
  public emi = 0;

  calculateEMI(emiForm: NgForm): void {
    this._emiService.emiCalculator(this.emiRequest).subscribe({
      next: (data: any) => {
        this.emi = data.emipm,
        this.emi_int_amout = data.roiAmount,
        this.emi_total_amount = data.totalPayment,
        console.log(data);
      },
      error: (error: any) => {
        console.error("Error in Calculating EMI: ", error);
      }
    });
  }

  resetForm(emiForm: any) {
    emiForm.resetForm();

    this.emi_int_amout = 0;
    this.emi_total_amount = 0;
    this.emi = 0;

  }

}
