import React from 'react'

const Certificate = () => {
  const certificate = [
    { id: 1, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1742406241/fekwe9lt5tnu1v1wzxkv.png', name: "Full-Stack Developer" },
    { id: 101, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745902200/b4decee3-f2b8-4d2c-8ff5-00f644ccf30f.png', name: 'introduction to mongodb' },
    { id: 2, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745900937/7afc6bed-89b1-4a73-a1fe-6c3c8d7a81ad.png', name: 'introduction to generative ai' },
    { id: 3, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901029/63138798-c506-4f4a-9a37-76a5767c5532.png', name: 'geneartive ai with LLM' },
    { id: 4, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901136/d868e99c-2969-4031-ab20-52da111f3a2f.png', name: 'Geneative Ai for Everyone' },
    { id: 5, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901234/e2c24f02-24fe-479d-b7bf-d44ad1eb6c36.png', name: 'Server side Js with Node.js' },
    { id: 6, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901292/3f6a77a6-2bbb-4cb4-9be9-b6db10fd1616.png', name: 'Frontend Developer' },
    { id: 7, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901346/1579ff6b-4822-4655-b37a-3bd521c49cdd.png', name: 'GenAI for Everyone' },
    { id: 8, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901413/2cafa11c-7fc2-42e0-ad72-73020bf18b51.png', name: 'Generative AI Primer' },
    { id: 9, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901553/3a4e0c7e-305b-4a60-98b6-ece723560a2f.png', name: 'Introduction to LLM' },
    { id: 10, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901692/c6bbbdb8-ee3c-4c00-9c11-d1003e4df798.png', name: 'Prompt Engineering for ChatGPT' },
    { id: 11, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745901983/bf0801b0-777b-4a33-babc-8fe5de06f015.png', name: 'ChatGPT for Beginners' },
    { id: 12, url: 'https://res.cloudinary.com/dlecrzota/image/upload/v1745902104/268d0492-8c1e-4ef1-94b3-19b8621b2e2f.png', name: 'ChatGPT playground for Beginners' },
  ]

  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className='w-full min-h-[100vh] py-10'>
      <div className='my-10'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          certi<span className='text-[#01a2e6] underline'>F</span>icate
        </h1>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {certificate.map((item) => (
          <div key={item.id} className='relative group'>
            <img
              src={item.url}
              alt={`Certificate ${item.id}`}
              className='w-[350px] h-auto object-cover rounded-md cursor-pointer shadow-md transition-transform'
              onClick={() => openInNewTab(item.url)}
            />
            <div className='absolute hidden group-hover:flex bottom-0 left-0 right-0 bg-[#96bbde] p-3  items-center justify-center transition-all duration-300 rounded-tr-sm text-black capitalize'>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificate
