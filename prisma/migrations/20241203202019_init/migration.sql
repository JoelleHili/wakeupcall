-- CreateTable
CREATE TABLE "ShockEntry" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "intensity" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "operation" TEXT NOT NULL,

    CONSTRAINT "ShockEntry_pkey" PRIMARY KEY ("id")
);
