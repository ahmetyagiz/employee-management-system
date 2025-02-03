package com.ahmetyagiz.services;

import com.ahmetyagiz.entities.Employee;
import com.ahmetyagiz.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getById(Long id) {
        return employeeRepository.findById(id).
                orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
    }

    public Employee save(Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    public void deleteById(Long id) {
        employeeRepository.deleteById(id);
    }
}