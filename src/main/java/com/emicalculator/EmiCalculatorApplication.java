package com.emicalculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class EmiCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmiCalculatorApplication.class, args);
		System.out.println("Emi Calculator");
	}
}
