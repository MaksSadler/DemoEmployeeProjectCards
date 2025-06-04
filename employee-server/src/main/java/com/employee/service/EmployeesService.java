package com.employee.service;

import com.employee.exception.EmployeeAlreadyExistsException;
import com.employee.exception.EmployeeNotFoundException;
import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeesService implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee addEmployee(Employee employee) {
        if (employeeAlreadyExists(employee.getEmail())) {
            throw new EmployeeAlreadyExistsException(employee.getEmail() + " already exists!");
        }
        return employeeRepository.save(employee);
    }


    @Override
    public Employee updateEmployee(Employee employee, Long id) {
        return employeeRepository.findById(id).map(st -> {
            st.setFirstName(employee.getFirstName());
            st.setLastName(employee.getLastName());
            st.setEmail(employee.getEmail());
            st.setDepartment(employee.getDepartment());
            return employeeRepository.save(st);
        }).orElseThrow(() -> new EmployeeNotFoundException("Sorry, this employee could not be found"));
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Sorry, no employee found with the Id :" + id));
    }

    @Override
    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)) {
            throw new EmployeeNotFoundException("Sorry, employee not found");
        }
        employeeRepository.deleteById(id);
    }

    private boolean employeeAlreadyExists(String email) {
        return employeeRepository.findByEmail(email).isPresent();
    }
}
