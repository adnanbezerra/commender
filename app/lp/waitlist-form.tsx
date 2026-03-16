"use client";

import { useState } from "react";

type WaitlistFormProps = {
    buttonLabel: string;
    inputClassName: string;
    buttonClassName: string;
    feedbackClassName: string;
    placeholder?: string;
};

type SubmissionState = {
    status: "idle" | "success" | "error";
    message: string;
};

const initialState: SubmissionState = {
    status: "idle",
    message: "",
};

export function WaitlistForm({
    buttonLabel,
    inputClassName,
    buttonClassName,
    feedbackClassName,
    placeholder = "Seu melhor e-mail",
}: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [submission, setSubmission] = useState<SubmissionState>(initialState);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {
            setSubmission({
                status: "error",
                message: "Preencha seu e-mail para entrar na lista.",
            });
            return;
        }

        setIsPending(true);
        setSubmission(initialState);

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: normalizedEmail }),
            });

            const payload = (await response.json()) as { message?: string };

            if (!response.ok) {
                setSubmission({
                    status: "error",
                    message:
                        payload.message ?? "Nao foi possivel enviar agora.",
                });
                return;
            }

            setSubmission({
                status: "success",
                message: payload.message ?? "E-mail cadastrado com sucesso.",
            });
            setEmail("");
        } catch {
            setSubmission({
                status: "error",
                message: "Nao foi possivel enviar agora.",
            });
        } finally {
            setIsPending(false);
        }
    }

    const feedbackTone =
        submission.status === "success" ? "text-emerald-700" : "text-red-700";

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={placeholder}
                    autoComplete="email"
                    required
                    className={inputClassName}
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className={buttonClassName}
                >
                    {isPending ? "Enviando..." : buttonLabel}
                </button>
            </div>
            {submission.status !== "idle" ? (
                <p className={`${feedbackClassName} ${feedbackTone}`}>
                    {submission.message}
                </p>
            ) : null}
        </form>
    );
}
