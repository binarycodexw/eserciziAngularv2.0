export enum RoleType {
    staff = 'staff',
    student = 'student',
    manager = 'manager',
    admin = 'admin'
  };
  
  export enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
  };
  
  
  export interface obj {
    id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: string,
    address: AddressData,
    role: RoleType,
    username: string,
    profilePhotoUrl: string,
    companies?: [CompanyData, CompanyData],
    gender: Gender
  }
  
  
  export interface AddressData {
    city: string,
    street: string,
    postalCode: string
  }
  
  export interface CompanyData {
    id?: number,
    name?: string,
    description?: string,
    location?: AddressData
  }