package com.ahmetyagiz.starter;

import com.ahmetyagiz.entities.Employee;
import com.ahmetyagiz.repository.EmployeeRepository;
import com.ahmetyagiz.services.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class EmployeeServiceTest {

	@Mock
	private EmployeeRepository employeeRepository;

	@InjectMocks
	private EmployeeService employeeService;

	private Employee employee;

	@BeforeEach
	void setUp() {
		employee = new Employee();
		employee.setId(1L);
		employee.setFirstName("John");
		employee.setLastName("Doe");
		employee.setEmail("john.doe@example.com");
	}

	@Test
	void testGetAllEmployees() {
		when(employeeRepository.findAll()).thenReturn(Arrays.asList(employee));
		List<Employee> employees = employeeService.getAllEmployees();
		assertEquals(1, employees.size());
	}

	@Test
	void testGetById() {
		when(employeeRepository.findById(1L)).thenReturn(Optional.of(employee));
		Employee foundEmployee = employeeService.getById(1L);
		assertNotNull(foundEmployee);
		assertEquals("John", foundEmployee.getFirstName());
	}

	@Test
	void testGetById_NotFound() {
		when(employeeRepository.findById(1L)).thenReturn(Optional.empty());
		Exception exception = assertThrows(RuntimeException.class, () -> employeeService.getById(1L));
		assertTrue(exception.getMessage().contains("Todo not found"));
	}

	@Test
	void testSave() {
		when(employeeRepository.save(employee)).thenReturn(employee);
		Employee savedEmployee = employeeService.save(employee);
		assertNotNull(savedEmployee);
		assertEquals("John", savedEmployee.getFirstName());
	}

	@Test
	void testDeleteById() {
		doNothing().when(employeeRepository).deleteById(1L);
		assertDoesNotThrow(() -> employeeService.deleteById(1L));
		verify(employeeRepository, times(1)).deleteById(1L);
	}

	@Test
	void testUpdate() {
		Employee updatedEmployee = new Employee();
		updatedEmployee.setFirstName("Jane");
		updatedEmployee.setLastName("Doe");

		when(employeeRepository.getById(1L)).thenReturn(employee);
		when(employeeRepository.save(any(Employee.class))).thenReturn(updatedEmployee);

		Employee result = employeeService.update(1L, updatedEmployee);
		assertEquals("Jane", result.getFirstName());
	}
}