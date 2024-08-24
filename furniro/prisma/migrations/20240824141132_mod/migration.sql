/*
  Warnings:

  - A unique constraint covering the columns `[email_addres]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "add_on_addres" DROP NOT NULL,
ALTER COLUMN "additional_information" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "company_name" DROP NOT NULL,
ALTER COLUMN "county" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "province" DROP NOT NULL,
ALTER COLUMN "street_addres" DROP NOT NULL,
ALTER COLUMN "zip_code" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_addres_key" ON "User"("email_addres");
