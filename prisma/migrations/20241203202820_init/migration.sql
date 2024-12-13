/*
  Warnings:

  - Added the required column `next_initiation` to the `ShockEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `request_name` to the `ShockEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShockEntry" ADD COLUMN     "next_initiation" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "request_name" TEXT NOT NULL;
