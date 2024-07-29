/*
  Warnings:

  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Students`;

-- CreateTable
CREATE TABLE `Student` (
    `student_uuid` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `student_prefix` VARCHAR(191) NOT NULL,
    `student_firstname` VARCHAR(191) NOT NULL,
    `student_lastname` VARCHAR(191) NOT NULL,
    `student_nickname` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_student_uuid_key`(`student_uuid`),
    UNIQUE INDEX `Student_student_id_key`(`student_id`),
    PRIMARY KEY (`student_uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
