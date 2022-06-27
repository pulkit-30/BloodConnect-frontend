/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: 'Learn About Donation',
    description:
      'Know about Compatible Blood Type Donors, Who can donate, Required Tests, Medical conditions and more FAQs.',
  },
  {
    name: 'Blood Availabilty Search',
    description: 'Check Availabilty of Blood Donors across college.',
  },
  {
    name: 'About Plasma',
    description: 'Know about Plasma and how to donate plasma and more about it',
  },
  {
    name: 'Map View',
    description: 'Hand sanded and finished with natural oil',
  },
  { name: 'Covid Help', description: 'we also provide covid-19 help' },
];

export default function About() {
  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2'>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
          <img
            loading='lazy'
            src='https://images.theconversation.com/files/405642/original/file-20210610-15-145vawv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
            alt='Walnut card tray with white powder coated steel divider and 3 punchout holes.'
            className='bg-gray-100 rounded-lg'
          />
          <img
            loading='lazy'
            src='https://www.chestercountyhospital.org/-/media/images/chestercounty/blog/2022/january/220119blood%20donation.ashx'
            alt='Top down view of walnut card tray with embedded magnets and card groove.'
            className='bg-gray-100 rounded-lg'
          />
          <img
            loading='lazy'
            src='https://melanmag.com/wp-content/uploads/2017/06/Feature-pic-DONATION-Rugby-star-Maggie-Alphonsi-giving-blood-for-the-first-time.jpeg'
            alt='Side of walnut card tray with card groove and recessed card area.'
            className='bg-gray-100 rounded-lg'
          />
          <img
            loading='lazy'
            src='https://cdn.24.co.za/files/Cms/General/d/1693/8d5ff609c7cf47e7a977f24912319e12.jpg'
            alt='Walnut card tray filled with cards and card angled in dedicated groove.'
            className='bg-gray-100 rounded-lg'
          />
        </div>
        <div>
          <h2 className='text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
            Features
          </h2>
          <p className='mt-4 text-gray-500'>
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>

          <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='border-t border-gray-200 pt-4'>
                <dt className='font-medium text-gray-900'>{feature.name}</dt>
                <dd className='mt-2 text-sm text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
