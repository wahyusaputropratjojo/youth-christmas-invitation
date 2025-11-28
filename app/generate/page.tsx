"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";
import { generateShortLink } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { TextField } from "@/components/ui/text-field";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
	const [data, formAction, isPending] = useActionState(
		generateShortLink,
		undefined,
	);

	const [tujuan, setTujuan] = useState(data?.fieldData?.tujuan || "");

	const [isCopied, setIsCopied] = useState(false);

	function handleCopy() {
		if (data?.shortUrl) {
			navigator.clipboard.writeText(data.shortUrl);
			setIsCopied(true);

			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		}
	}

	return (
		<main className="flex min-h-svh flex-col justify-around gap-12 bg-[#f2efe6] p-4">
			<h1 className="mx-auto w-full font-extrabold text-6xl text-[#234940] uppercase tracking-tighter sm:w-xl">
				Buat Undangan
			</h1>
			{!data?.shortUrl && (
				<section className="mx-auto w-full sm:w-xl">
					<form action={formAction} className="flex w-full flex-col gap-2">
						<TextField name="tujuan" onChange={setTujuan} value={tujuan}>
							<Label>Tujuan</Label>
							<Textarea className="min-h-32" />
						</TextField>
						<Button
							isDisabled={!tujuan}
							isPending={isPending}
							size="lg"
							type="submit"
						>
							{isPending && <Spinner />}
							{isPending ? "Membuat" : "Buat Link"}
						</Button>
					</form>
				</section>
			)}
			{data?.shortUrl && (
				<section className="mx-auto flex w-full flex-col gap-2 sm:w-xl">
					<p className="font-medium">Link Undangan</p>
					<div className="min-h-32 w-full rounded-xl border p-4">
						<p>{data?.shortUrl}</p>
					</div>
					<Button isPending={isCopied} onPress={handleCopy} size="lg">
						{isCopied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
						{isCopied ? "Tersalin!" : "Salin Link"}
					</Button>
					<Link href="/generate">
						<Button className="w-full" intent="outline" size="lg">
							Reset
						</Button>
					</Link>
				</section>
			)}
		</main>
	);
}
