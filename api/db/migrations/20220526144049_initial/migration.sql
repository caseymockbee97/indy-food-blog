-- CreateEnum
CREATE TYPE "Price" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Reservation" AS ENUM ('NO', 'MAYBE', 'DEFINITELY');

-- CreateEnum
CREATE TYPE "Meal" AS ENUM ('BREAKFAST', 'BRUNCH', 'LUNCH', 'TEA', 'DINNER', 'DESSERT', 'DRINKS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "restaurantName" TEXT NOT NULL,
    "mainImageURL" TEXT NOT NULL,
    "articleBody" TEXT NOT NULL,
    "priceLevel" "Price" NOT NULL,
    "dogFriendly" BOOLEAN NOT NULL,
    "outdoorSeating" BOOLEAN NOT NULL,
    "barSeating" BOOLEAN NOT NULL,
    "reservationNeeded" "Reservation" NOT NULL,
    "mealType" "Meal" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_lastName_key" ON "User"("firstName", "lastName");
