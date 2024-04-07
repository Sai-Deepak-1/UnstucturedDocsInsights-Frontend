"use client";
import React from "react";

export default function Example() {
  return (
    <div className="background-gradient">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl sm:py-24 lg:py-36">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Unstructured Docs Insinghts Chatbot in AWS
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Full Stack LL Model Chatbot to extract Insights from Unstructured
              Documents from AWS.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
