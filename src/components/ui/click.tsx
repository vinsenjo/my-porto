import  { useState } from 'react';

function ClickToCopy() {
    const [text, setText] = useState('vinjovinda@gmail.com');
    const email = "vinjovinda@gmail.com";

    const handleCopyClick = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setText('Email Copied!'); // Ubah teks setelah berhasil disalin
                setTimeout(() => {
                    setText(email); // Kembalikan teks setelah 2 detik
                }, 2000);
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    };

    return (
        <button onClick={handleCopyClick} className="hover:scale-105 duration-300 font-raleway  lg:text-4xl font-semibold text-black rounded">
            {text}
        </button>
    );
}

export default ClickToCopy;
