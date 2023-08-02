package com.emicalculator.calculator;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="emitable")

public class EmiCalculatorEntity {
	
	@Id
	@Column(name="loan", length = 30)
	private Double loanamount;
	private Double loanroi;
	private Double loantenure;
	private Double emipm;
	private Double totalPayment;
	private Double roiAmount;
	
}
