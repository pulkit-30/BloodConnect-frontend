import React from 'react';

function LearnMore() {
  return (
    <section id='learn'>
      <h1 className='m-10 flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
        Learn About Donation
      </h1>
      <div
        className='section-wrap flex'
        style={{
          width: '100%',
        }}
      >
        <div
          className='subsection flex justify-center align-center flex-col m-auto'
          style={{
            width: '40%',
          }}
        >
          <iframe
            className='rounded-md'
            src='https://www.youtube.com/embed/B6dAPXpUjCE'
            title='YouTube video player'
            frameBorder='2'
            height={'400px'}
            width={'100%'}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <p className='mt-10 text-gray-900 text-xl'>
            After donating blood, the body works to replenish the blood loss.
            This stimulates the production of new blood cells and in turn, helps
            in maintaining good health.
          </p>
        </div>
        <div
          className='subsection mt-10 m-auto h-full'
          style={{
            width: '45%',
            overflow: 'auto',
          }}
        >
          <table>
            <tbody>
              <tr>
                <th
                  colSpan={3}
                  className='bg-indigo-700 text-gray-300 border-2'
                >
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <td>
                  <b>Blood Type</b>
                </td>
                <td>
                  <b>Donate Blood To</b>
                </td>
                <td>
                  <b>Receive Blood From</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>A+</b>
                  </span>
                </td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>O+</b>
                  </span>
                </td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>B+</b>
                  </span>
                </td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>AB+</b>
                  </span>
                </td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>A-</b>
                  </span>
                </td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>O-</b>
                  </span>
                </td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>B-</b>
                  </span>
                </td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <b>AB-</b>
                  </span>
                </td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default LearnMore;
