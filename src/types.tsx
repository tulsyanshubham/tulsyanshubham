import Image, { StaticImageData } from "next/image";

export interface project_type {
    title: string;
    description: string;
    image_data: StaticImageData | string;
    url: string;
    content?: string | null;
}