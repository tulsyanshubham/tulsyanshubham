"use client";
import React from "react";
import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import axios, { AxiosError } from 'axios';
import { Loader2 } from "lucide-react";

export function Contact() {

    const [formData, setFormData] = React.useState({
        fname: "",
        lname: "",
        email: "",
        msg: "",
    });
    const [isSending, setIsSending] = React.useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSending) return;
        setIsSending(true);
        const response = await axios.post('/api/send-message', formData);
        console.log(response.data)
        toast({
            title: response.data.success ? 'Success' : 'Failed',
            description: response.data.message,
            variant: response.data.success ? 'default' : 'destructive'
        });
        setFormData({
            fname: "",
            lname: "",
            email: "",
            msg: "",
        });
        setIsSending(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="py-10 px-10" id="contact">
            <div className='flex flex-col items-center justify-center'>
                <div className='mb-3'>
                    <h2 className="text-4xl sm:text-5xl font-bold text-center">Contact Me</h2>
                    <h2 className="text-lg md:text-xl text-teal-600 font-semibold tracking-wide text-center mt-2">
                        Feel free to reach out to me anytime.
                    </h2>
                </div>
                <div className="max-w-md md:max-w-lg w-full mx-auto rounded-xl md:rounded-2xl shadow-input  ">
                    {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                        Send me a message
                    </h2> */}
                    {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        I will get back to you as soon as possible.
                    </p> */}

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" value={formData.fname} onChange={handleChange} name="fname" placeholder="Abc" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" value={formData.lname} onChange={handleChange} name="lname" placeholder="Xyz" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" value={formData.email} onChange={handleChange} name="email" placeholder="abcxyz@fc.com" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="mesage">Message</Label>
                            <Textarea id="mesage" value={formData.msg} onChange={handleChange} name="msg" placeholder="Let me know how everything looks" />
                        </LabelInputContainer>

                        <button disabled={!isSending && !(formData.fname && formData.lname && formData.email && formData.msg)}
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            {isSending ? (
                                <>
                                <Loader2 className='h-6 w-6 animate-spin mx-auto' />
                                </>
                            ) : ("Send")}
                            <BottomGradient />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
