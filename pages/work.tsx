import { client, urlFor } from '../utils/client';
import { IWork } from '../types';
import Image from 'next/image';

interface IProps {
  works: IWork[];
}

const work = ({ works }: IProps) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-wrap p-[10%_5%] h-screen w-[60%]">
        {works.map((work) => (
          <div
            key={work._id}
            className="flex flex-col h-max w-[400px] shadow-lg rounded-lg divide-y-2 divide-gray-200 overflow-clip bg-white"
          >
            <div className="relative pb-4">
              <Image
                src={urlFor(work.imgUrl).url()}
                layout="responsive"
                width={550}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <p className="font-semibold text-lg">
                <a
                  href={work.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {work.title}
                </a>
                .
              </p>
              <p className="text-gray-700">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'works'] {
    _id,
    title,
    description,
    imgUrl,
    projectLink,
    githubLink
  }`;

  const works = await client.fetch(query);

  return {
    props: {
      works,
    },
  };
};

export default work;
