import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { client } from '../utils/client';
import ContactSvg from '../components/ContactSvg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    if (name !== '' && email !== '' && message !== '') {
      setIsError(false);
      client.create(contact).then(() => {
        setIsLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      setIsError(true);
    }
  };

  return (
    <motion.div
      exit={{ x: '-100vw' }}
      transition={{ duration: 1 }}
      className="relative flex flex-col md:flex-row h-screen w-screen overflow-x-hidden scrollbar-hide"
    >
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-0 z-20 h-screen w-screen md:w-[50vw] bg-white mix-blend-difference pointer-events-none"
      >
        <ContactSvg />
      </motion.div>
      <div className="flex flex-col items-center pt-[20%] md:pt-[10%] min-h-screen md:h-[80%] md:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: '-50px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center xl:justify-start mt-28 xl:mt-0 text-[40px] xl:text-[60px] h-full w-2/3 md:w-1/2 font-bodoni font-semibold"
        >
          I&apos;d love to hear from you!
        </motion.p>
      </div>
      <div className="flex min-h-screen w-screen md:w-[50vw] pt-[20%] md:pt-[10%]">
        <motion.form
          initial={{ opacity: 0, x: '50px' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mx-auto p-2 w-[80vw] md:w-[40vw] md:h-auto font-poppins pointer-events-auto"
        >
          <p className="mb-4 text-[30px] font-bodoni font-semibold text-center md:text-start">
            Contact Me
          </p>
          <label>
            Name <br />
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChangeInput}
              className="focus:outline-none focus:border-black md:w-1/2 py-1 border-b-[1px] border-gray-300 bg-transparent"
            />
          </label>
          <label>
            Email <br />
            <input
              value={email}
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChangeInput}
              className="focus:outline-none focus:border-black md:w-1/2 py-1 border-b-[1px] border-gray-300 bg-transparent"
            />
          </label>
          <label>
            Meessage <br />
            <textarea
              value={message}
              name="message"
              placeholder="Enter Your Message here"
              onChange={handleChangeInput}
              className="focus:outline-none focus:border-black h-[100px] w-full md:w-[80%] py-1 border-b-[1px] border-gray-300 resize-none bg-transparent"
            />
          </label>
          {isFormSubmitted ? (
            <p className="py-4 px-2 font-poppins w-max bg-[#dbffe6] text-[#05c73f] rounded-md">
              Thank You for reaching out!
            </p>
          ) : (
            <button type="submit" className="flex items-center gap-4 py-4 font-poppins w-max">
              {isLoading && !isError ? 'Sending...' : 'Send Message'} <BsArrowRight />
            </button>
          )}

          {isError && (
            <p className="-mt-10 italic text-red-600">
              *Oops! Please fill in the empty input fields.
            </p>
          )}

          <div className="flex flex-col lg:flex-row 2xl:mt-12">
            <div className="flex flex-col font-poppins w-1/2">
              <p className="text-gray-400">Email Me</p>
              <p>chrisbryanang@gmail.com</p>
            </div>
            <div className="flex justify-center gap-2 lg:justify-end lg:w-[30%] mt-12 md:mt-4 lg:mt-0 pb-4 md:pb-0">
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center self-end bg-white text-black w-9 h-9 rounded-full cursor-pointer"
              >
                <a
                  href="https://linkedin.com/in/christopher-ang-59b059117"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="h-7 w-7   rounded-full" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ backgroundColor: '#000', color: '#fff' }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center self-end bg-white text-black w-9 h-9 rounded-full cursor-pointer"
              >
                <a
                  href="https://github.com/ChrisBryanAng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="h-7 w-7" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
