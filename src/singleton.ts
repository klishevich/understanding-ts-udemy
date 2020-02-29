class AccountingDepartment {
  private static instance: AccountingDepartment;

  private constructor(public id: string) {
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2");
    return this.instance
  }
}

console.log(AccountingDepartment.getInstance());
