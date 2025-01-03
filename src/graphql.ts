
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CertificationStatus {
    PENDING = "PENDING",
    PASSED = "PASSED"
}

export enum UserStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE"
}

export class CreateCertificationInput {
    code: string;
    name: string;
    description?: Nullable<string>;
    badgeUrl?: Nullable<string>;
    certificationUrl?: Nullable<string>;
    verificationUrl?: Nullable<string>;
}

export class UpdateCertificationInput {
    code?: Nullable<string>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    badgeUrl?: Nullable<string>;
    certificationUrl?: Nullable<string>;
    verificationUrl?: Nullable<string>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class Certification {
    id: string;
    code: string;
    name: string;
    description?: Nullable<string>;
    badgeUrl?: Nullable<string>;
    certificationUrl?: Nullable<string>;
    verificationUrl?: Nullable<string>;
}

export abstract class IQuery {
    abstract certifications(): Nullable<Certification>[] | Promise<Nullable<Certification>[]>;

    abstract certification(id: string): Nullable<Certification> | Promise<Nullable<Certification>>;

    abstract healthCheck(): HealthCheck | Promise<HealthCheck>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCertification(createCertificationInput: CreateCertificationInput): Certification | Promise<Certification>;

    abstract updateCertification(id: string, updateCertificationInput: UpdateCertificationInput): Certification | Promise<Certification>;

    abstract removeCertification(id: string): Nullable<Certification> | Promise<Nullable<Certification>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): User | Promise<User>;
}

export class ServiceStatus {
    api: boolean;
    database: boolean;
}

export class HealthCheck {
    name: string;
    version: string;
    healthy: boolean;
    services: ServiceStatus;
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
