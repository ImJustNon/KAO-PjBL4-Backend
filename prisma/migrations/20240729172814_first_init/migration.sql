-- CreateTable
CREATE TABLE `Students` (
    `student_uuid` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(191) NOT NULL,
    `student_firstname` VARCHAR(191) NOT NULL,
    `student_lastname` VARCHAR(191) NOT NULL,
    `student_nickname` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Students_student_uuid_key`(`student_uuid`),
    UNIQUE INDEX `Students_student_id_key`(`student_id`),
    PRIMARY KEY (`student_uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
