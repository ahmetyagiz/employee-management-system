package com.ahmetyagiz.repository;

import com.ahmetyagiz.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
