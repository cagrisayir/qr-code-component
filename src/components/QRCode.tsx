import qrcode from '../assets/qr_cagrisayir.png';

const QRCode = () => {
	return (
		<div className='flex flex-col bg-white p-7 rounded-3xl space-y-7 text-center items-center justify-between shadow-lg'>
			<div className='w-72 h-72 bg-[#3685FF] flex justify-center items-center rounded-lg'>
				<img
					src={qrcode}
					alt='QR code for cagrisayir.dev'
					className='w-40 h-40'
				/>
			</div>
			<p className='font-semibold text-xl w-72'>Scan QR Code above!</p>
			<p className='font-extralight text-sm w-72 text-[#7D889E]'>
				Scan the QR code to visit cagrisayir.dev to see my portfolio.
			</p>
		</div>
	);
};

export default QRCode;
