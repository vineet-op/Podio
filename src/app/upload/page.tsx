'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'

export default function UploadPage() {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the form submission
        // For example, sending the data to an API
        console.log('Submitted:', { title, file })
    }

    return (
        <div className="min-h-screen bg-black text-gray-400 flex items-center justify-center">
            <div className="w-full max-w-md p-8 rounded-lg bg-gray-900 bg-opacity-20 border border-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Upload Your PDF</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="title" className="text-white">Title</Label>
                        <Input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="mt-1 w-full bg-black border-green-600 text-green-400 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter a title for your audio"
                        />
                    </div>
                    <div>
                        <Label htmlFor="pdf" className="text-white">PDF File</Label>
                        <div className="mt-1 flex items-center justify-center w-full">
                            <label
                                htmlFor="pdf"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-green-600 border-dashed rounded-lg cursor-pointer bg-black hover:bg-green-900 hover:bg-opacity-20"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <Upload className="w-8 h-8 mb-3 text-green-400" />
                                    <p className="mb-2 text-sm text-green-400">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-green-500">PDF (MAX. 10MB)</p>
                                </div>
                                <Input
                                    id="pdf"
                                    type="file"
                                    accept=".pdf"
                                    className="hidden"
                                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold">
                        Convert to Audio
                    </Button>
                </form>
            </div>
        </div>
    )
}

