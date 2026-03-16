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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const [flashClass, setFlashClass] = useState("");

    function triggerFlash(status: SubmissionState["status"]) {
        if (status === "idle") {
            setFlashClass("");
            return;
        }

        const nextClass =
            status === "success" ? "form-pulse-success" : "form-pulse-error";

        setFlashClass("");

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                setFlashClass(nextClass);
            });
        });

        window.setTimeout(() => {
            setFlashClass("");
        }, 950);
    }

    function updateSubmission(nextSubmission: SubmissionState) {
        setSubmission(nextSubmission);
        triggerFlash(nextSubmission.status);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {
            updateSubmission({
                status: "error",
                message: "Preencha seu e-mail para entrar na lista.",
            });
            return;
        }

        if (!EMAIL_REGEX.test(normalizedEmail)) {
            updateSubmission({
                status: "error",
                message: "Informe um e-mail valido.",
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
                updateSubmission({
                    status: "error",
                    message:
                        payload.message ?? "Nao foi possivel enviar agora.",
                });
                return;
            }

            updateSubmission({
                status: "success",
                message: payload.message ?? "E-mail cadastrado com sucesso.",
            });
            setEmail("");
        } catch {
            updateSubmission({
                status: "error",
                message: "Nao foi possivel enviar agora.",
            });
        } finally {
            setIsPending(false);
        }
    }

    const containerTone =
        submission.status === "success"
            ? "border-emerald-300/80 bg-emerald-50/50"
            : submission.status === "error"
              ? "border-red-300/80 bg-red-50/40"
              : "border-transparent bg-transparent";
    const feedbackBubbleTone =
        submission.status === "success"
            ? "border-emerald-200 bg-emerald-50 text-emerald-800 shadow-[0_16px_40px_rgba(34,197,94,0.16)]"
            : "border-red-200 bg-white text-red-700 shadow-[0_16px_40px_rgba(239,68,68,0.16)]";

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div
                className={`rounded-[1.5rem] border p-3 transition-colors duration-200 ${containerTone} ${flashClass}`}
            >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="relative min-w-0 flex-1">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder={placeholder}
                            autoComplete="email"
                            aria-invalid={submission.status === "error"}
                            aria-describedby="waitlist-feedback"
                            required
                            className={`w-full ${inputClassName}`}
                        />
                        <p
                            id="waitlist-feedback"
                            aria-live="polite"
                            className={`${feedbackClassName} absolute left-0 right-0 top-[calc(100%+0.65rem)] z-20 rounded-2xl border px-4 py-3 text-sm font-semibold ${feedbackBubbleTone} ${
                                submission.status === "idle" ? "hidden" : "block"
                            }`}
                        >
                            {submission.message}
                        </p>
                    </div>
                    <button
                        type="submit"
                        disabled={isPending}
                        className={buttonClassName}
                    >
                        {isPending ? "Enviando..." : buttonLabel}
                    </button>
                </div>
            </div>
        </form>
    );
}
