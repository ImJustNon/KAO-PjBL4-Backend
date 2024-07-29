/*
  Warnings:

  - Made the column `student_prefix` on table `Students` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Students` MODIFY `student_prefix` VARCHAR(191) NOT NULL;
