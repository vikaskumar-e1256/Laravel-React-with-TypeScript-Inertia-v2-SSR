import { Feature } from '@/types';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

function FeatureItem({ feature }: { feature: Feature }) {
  const [isExpended, setIsExpended] = useState(false);

  const toggleReadMore = () => {
    setIsExpended(!isExpended);
  }
  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
        <div className="flex flex-col items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
          <span className="text-2xl font-semibold">12</span>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl mb-2">
            <Link href={route("features.show", feature.id)}>
              {feature.name}
            </Link>
          </h2>
          
          <p>
            {feature.description
              ? isExpended || feature.description.length <= 200
                ? feature.description
                : `${feature.description.slice(0, 200)}...`
              : ""}
          </p>

          <button
            onClick={toggleReadMore}
            className="text-amber-500 hover:underline"
          >
            {isExpended ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
