/*
  Warnings:

  - You are about to drop the column `next_initiation` on the `ShockEntry` table. All the data in the column will be lost.
  - Added the required column `scheduled_date_time` to the `ShockEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShockEntry" DROP COLUMN "next_initiation",
ADD COLUMN     "scheduled_date_time" TIMESTAMP(3) NOT NULL;
