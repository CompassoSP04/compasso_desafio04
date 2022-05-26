class EmployeeService {
    create(payload) {
        const result = EmployeeRepository.create(payload)
        return result
    }
}