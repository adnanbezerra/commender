import { NextResponse } from "next/server";

import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { email?: string };
        const email = body.email?.trim().toLowerCase();

        if (!email || !EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { message: "Informe um e-mail valido." },
                { status: 400 },
            );
        }

        await prisma.waitlistLead.create({
            data: {
                email,
            },
        });

        return NextResponse.json(
            { message: "E-mail cadastrado com sucesso." },
            { status: 201 },
        );
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return NextResponse.json(
                { message: "Esse e-mail ja esta na lista de espera." },
                { status: 409 },
            );
        }

        return NextResponse.json(
            { message: "Nao foi possivel salvar seu e-mail agora." },
            { status: 500 },
        );
    }
}
