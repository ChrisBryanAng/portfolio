import React from 'react';
import Image from 'next/image';
import { client, urlFor } from '../utils/client';
import { VscDesktopDownload } from 'react-icons/vsc';

interface IProps {
  cvImage: {
    _id: string;
    imageurl: string;
    cvURL: string;
  }[];
}

const Download_cv = ({ cvImage }: IProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-screen w-screen">
      <div className="flex items-end justify-center h-full w-full lg:w-1/2">
        <div className="relative h-[90vh] w-[100vw] lg:h-[90vh] lg:w-[65vw]">
          <Image
            src={urlFor(cvImage[0].imageurl).url()}
            layout="fill"
            priority
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-1/2 gap-4 font-cantataOne">
        <a
          href={`${cvImage[0].cvURL}?dl=ChristopherAng_CV.pdf`}
          className="text-2xl hover:underline"
        >
          Download PDF
        </a>
        <VscDesktopDownload className="h-10 w-10" />
      </div>
    </div>
  );
};

export default Download_cv;

export const getServerSideProps = async () => {
  const query = `*[_type == 'cv'] {
    _id,
    imageurl,
    "cvURL": cvfile.asset->url
}`;

  const cvImage = await client.fetch(query);

  return {
    props: {
      cvImage,
    },
  };
};
