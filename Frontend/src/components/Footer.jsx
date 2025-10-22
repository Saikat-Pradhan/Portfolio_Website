export default function Footer() {
  return (
    <div className="bg-gray-900 md:w-screen lg:w-screen mx-auto py-4 px-5 md:flex lg-flex text-center">
      <div className="text-gray-500 flex justify-center">
        <p>© 2025 Saikat Pradhan, Portfolio. All rights reserved.</p>
      </div>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500" href="https://www.facebook.com/share/15ou9D3tyU/">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a
          className="ml-3 text-gray-500"
          href="https://www.instagram.com/saikat____777/"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          className="ml-3 text-gray-500"
          href="https://www.linkedin.com/in/saikat-pradhan777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-[18px] h-[1.4rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.25 12.27h-3v-5.5c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.91v5.6h-3v-11h2.88v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v6.45z" />
          </svg>
        </a>
        <a
          className="ml-3 text-gray-500"
          href="https://github.com/Saikat-Pradhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-[20px] h-[1.4rem]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.787 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.403c1.02.005 2.047.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.216.694.825.576C20.565 22.08 24 17.586 24 12.297 24 5.67 18.627 0.297 12 0.297z"
            />
          </svg>
        </a>
      </span>
    </div>
  );
}