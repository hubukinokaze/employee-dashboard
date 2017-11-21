package com.example.employeedashboard.repository;

import com.example.employeedashboard.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
