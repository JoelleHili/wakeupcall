/*
  Warnings:

  - Added the required column `country` to the `ShockEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShockEntry" ADD COLUMN     "country" TEXT NOT NULL;
