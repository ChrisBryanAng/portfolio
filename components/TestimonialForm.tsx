/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityAssetDocument } from '@sanity/client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { client } from '../utils/client';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState<SanityAssetDocument | undefined>();
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name, company, message } = formData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const uploadImage = async (e: any) => {
    const selectedFile = e.target.files[0];
    setIsImageLoading(true);

    client.assets
      .upload('image', selectedFile, {
        contentType: selectedFile.type,
        filename: selectedFile.name,
      })
      .then((data) => {
        setImageAsset(data);
        setIsImageLoading(false);
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const testimonial = {
      _type: 'testimonials',
      name: name,
      company: company,
      message: message,
      imageurl: {
        _type: 'image',
        asset: {
          _ref: imageAsset?._id,
          _type: 'reference',
        },
      },
    };

    if (name !== '' && company !== '' && message !== '' && imageAsset) {
      setIsError(false);
      client.create(testimonial).then(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="flex items-center h-[80vh] w-screen md:w-[50vw]  bg-slate-100/75 rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 mx-auto p-2 w-[80vw] md:w-[40vw] md:h-auto font-poppins pointer-events-auto"
      >
        <p className="mb-4 text-[30px] font-bodoni font-semibold text-center md:text-start">Form</p>
        <label>
          Name <br />
          <input
            value={name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChangeInput}
            className="focus:outline-none focus:border-black md:w-1/2 py-1 border-b-[1px] border-gray-300 bg-transparent"
          />
        </label>
        <label>
          Company <br />
          <input
            value={company}
            name="company"
            type="text"
            placeholder="Company"
            onChange={handleChangeInput}
            className="focus:outline-none focus:border-black md:w-1/2 py-1 border-b-[1px] border-gray-300 bg-transparent"
          />
        </label>

        <div className="flex flex-col justify-center items-center outline-none cursor-pointer">
          {isImageLoading ? (
            <p>Uploading...</p>
          ) : (
            <div>
              {imageAsset ? (
                <div className="relative h-[200px] w-[300px]">
                  <Image src={imageAsset.url} layout="fill" priority objectFit="contain" />
                </div>
              ) : (
                <label className="cursor-pointer">
                  <div className="flex flex-col">
                    <p className="bg-black text-center rounded text-white text-md font-medium p-2 w-48 outline-none">
                      Select Image File
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-image"
                    onChange={uploadImage}
                    className="w-0 h-0"
                  />
                </label>
              )}
            </div>
          )}
        </div>

        <label>
          Meessage <br />
          <textarea
            value={message}
            name="message"
            placeholder="Message"
            onChange={handleChangeInput}
            className="focus:outline-none focus:border-black h-[100px] w-full md:w-[80%] py-1 border-b-[1px] border-gray-300 resize-none bg-transparent"
          />
        </label>
        {isFormSubmitted ? (
          <p className="py-4 px-2 font-poppins w-max bg-[#dbffe6] text-[#05c73f] rounded-md">
            Thank You! 🤗
          </p>
        ) : (
          <button type="submit" className="flex items-center gap-4 py-4 font-poppins w-max">
            {isLoading && !isError ? 'Sending...' : 'Send'} <BsArrowRight />
          </button>
        )}

        {isError && (
          <p className="-mt-10 italic text-red-600">
            *Oops! Please fill in the empty input fields.
          </p>
        )}
      </form>
    </div>
  );
};

export default TestimonialForm;
