package com.emicalculator.calculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmiCalculatorServiceImpl implements EmiCalculatorService {

	@Autowired
	EmiCalculatorRepo eRepo;
	
	@Override
	public EmiCalculatorEntity calculatemi(EmiCalculatorEntity emicalculator) {
		
			Double principal = emicalculator.getLoanamount();
			Double time = emicalculator.getLoantenure() * 12;
			Double rate = emicalculator.getLoanroi() / (12*100);
			
			Double emiAmount =principal*rate*Math.pow(1+rate,time)/(Math.pow(1+rate,time)-1);
			
			emicalculator.setEmipm((double) Math.round(emiAmount));
			emicalculator.setTotalPayment((double) Math.round(emiAmount*time));
			emicalculator.setRoiAmount(emicalculator.getTotalPayment() - principal);

			return emicalculator;
			//return (double) Math.round(emiamount);
			//return jpaERepo.save(emicalculator); if you use this it will store this data which is unneccesary
	}
}
