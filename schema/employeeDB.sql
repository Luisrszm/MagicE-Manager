-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).
CREATE TABLE "role" (
    "id" SERIAL   NOT NULL,
    "title" VARCHAR(30)   NOT NULL,
    "salary" DECIMAL   NOT NULL,
    "department" INTEGER   NOT NULL,
    CONSTRAINT "pk_role" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "department" (
    "id" SERIAL   NOT NULL,
    "name" VARCHAR(30)   NOT NULL,
    CONSTRAINT "pk_department" PRIMARY KEY (
        "id"
     ),
    CONSTRAINT "uc_department_name" UNIQUE (
        "name"
    )
);

-- Table documentation comment 1 (try the PDF/RTF export)
-- Table documentation comment 2
CREATE TABLE "employee" (
    "id" SERIAL   NOT NULL,
    -- Field documentation comment 1
    -- Field documentation comment 2
    -- Field documentation comment 3
    "first_name" VARCHAR(30)   NOT NULL,
    "last_name" VARCHAR(30)   NOT NULL,
    "role_id" INTEGER   NOT NULL,
    "manager_id" INTEGER   NOT NULL,
    CONSTRAINT "pk_employee" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "role" ADD CONSTRAINT "fk_role_department" FOREIGN KEY("department")
REFERENCES "department" ("id");

ALTER TABLE "employee" ADD CONSTRAINT "fk_employee_role_id" FOREIGN KEY("role_id")
REFERENCES "role" ("id");

ALTER TABLE "employee" ADD CONSTRAINT "fk_employee_manager_id" FOREIGN KEY("manager_id")
REFERENCES "employee" ("id");

