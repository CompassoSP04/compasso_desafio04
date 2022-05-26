class EmployeeRepository {
    create(payload) {
        return EmployeeSchema.create(payload);
    }
}