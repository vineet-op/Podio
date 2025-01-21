"use client"

import React from 'react'
import { cn } from "@/lib/utils";
import GridPattern from "@/app/components/ui/grid-pattern";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const page = () => {

    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const [audioURL, setAudioURL] = useState<string | null>(null);


    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !file) {
            alert("Please provide both title and file.");
            return;
        }

        try {
            setLoading(true)
            const formData = new FormData();
            formData.append("title", title);
            if (file instanceof File) {
                formData.append("file", file); // Append the file if it's a valid File object
            } else {
                throw new Error("Invalid file type");
            }

            const response = await axios.post("http://localhost:5000/send", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Required for form-data
                },
            })
            console.log("Response:", response.data);
            if (response.data.audiourl) {
                setAudioURL(response.data.audiourl); // Save the audio URL
            } else {
                alert("No audio URL found in the response.");
            }
            setLoading(false)
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload the file.");
        }
    }

    return (
        <section className='bg-black h-screen flex justify-center items-center'>
            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                )}
            />
            <Card className="w-full max-w-md mx-auto bg-black">
                <form id="file-upload-form" onSubmit={HandleSubmit}>
                    <CardHeader>
                        <CardTitle className='text-white'>File Upload</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title" className='text-white'>Title</Label>
                            <Input value={title}
                                onChange={(e: any) => setTitle(e.target.value)}
                                id="title"
                                className='bg-white'
                                name="title"
                                required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="file" className='text-white'>File</Label>
                            <Input
                                onChange={(e: any) => setFile(e.target.files?.[0])}
                                id="file"
                                name="file"
                                type="file"
                                required
                                className='bg-white'
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='mt-6' >
                        <Button variant="outline" className='rounded-full w-full text-base font-semibold bg-pink-500 hover:bg-pink-600 text-white'>
                            {loading ? "Processing" : "Convert"}
                        </Button>
                        {audioURL && (
                            <a
                                href={audioURL}
                                download="output.mp3"
                                className="rounded-full w-full text-center text-base font-semibold bg-green-500 hover:bg-green-600 text-white py-2"
                            >
                                Download MP3
                            </a>
                        )}
                    </CardFooter>
                </form>
            </Card>



        </section>
    )
}

export default page