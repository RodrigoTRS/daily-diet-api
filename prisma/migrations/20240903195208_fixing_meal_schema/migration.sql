/*
  Warnings:

  - Added the required column `onDiet` to the `meals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "onDiet" BOOLEAN NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
