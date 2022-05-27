/*
  Warnings:

  - You are about to drop the `Suggestions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Suggestions";

-- CreateTable
CREATE TABLE "Suggestion" (
    "id" TEXT NOT NULL,
    "suggestion" VARCHAR(300) NOT NULL,
    "makePublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);
