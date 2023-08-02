package com.emicalculator.calculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/rest/api")
public class EmiCalculatorController {
		
	@Autowired
	private EmiCalculatorServiceImpl emiCalService;
	
	@PostMapping("/customers/emi")
	public EmiCalculatorEntity emicalculation(@RequestBody EmiCalculatorEntity emi) {
		return emiCalService.calculatemi(emi);
		//return emiservice.calculatemi(emi);	
	}
}
