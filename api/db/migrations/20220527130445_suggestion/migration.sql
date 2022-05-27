-- CreateTable
CREATE TABLE "Suggestions" (
    "id" TEXT NOT NULL,
    "suggestion" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Suggestions_pkey" PRIMARY KEY ("id")
);
