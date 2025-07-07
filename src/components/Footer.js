import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaPinterestP,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t text-center sm:text-left">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">

        <div className="flex justify-center md:justify-start">
          <Image src="/logo1.png" alt="Paperless Post Logo" width={250} height={50} />
        </div>

        <div>
          <h3 className="font-bold mb-2">LEARN</h3>
          <ul className="space-y-1">
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Online invitations</Link></li>
            <li><Link href="#">Designer collections</Link></li>
            <li><Link href="#">Product features</Link></li>
            <li><Link href="#">Apps</Link></li>
          </ul>
        </div>
        <h3 className="font-bold mb-2">LEARN</h3>
        <ul className="space-y-1">
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Online invitations</Link></li>
          <li><Link href="#">Designer collections</Link></li>
          <li><Link href="#">Product features</Link></li>
          <li><Link href="#">Apps</Link></li>
        </ul>
      </div>

      <div className="mt-10 flex flex-col items-center space-y-4">
        <div className="flex justify-center space-x-4 text-xl">
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaTiktok /></Link>
          <Link href="#"><FaPinterestP /></Link>
          <Link href="#"><FaFacebookF /></Link>
          <Link href="#"><FaYoutube /></Link>
          <Link href="#"><FaXTwitter /></Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Link href="#">
            <div className="flex items-center border px-4 py-2 rounded-md shadow-sm hover:shadow-md transition bg-white">
              <div className="text-2xl mr-3">
                <Image src="/appstore.jpeg" alt="Paperless Post Logo" width={45} height={50} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 leading-none">Download on the</p>
                <p className="text-base font-semibold">App Store</p>
              </div>
            </div>
          </Link>

          <Link href="#">
            <div className="flex items-center border px-4 py-2 rounded-md shadow-sm hover:shadow-md transition bg-white">
              <div className="text-2xl mr-3">
                <Image src="/google.png" alt="Paperless Post Logo" width={45} height={50} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 leading-none">GET IT ON</p>
                <p className="text-base font-semibold">Google Play</p>
              </div>
            </div>
          </Link>
        </div>

      </div>

      <div className="mt-10 border-t text-sm text-gray-500 py-4 px-2 space-y-2 text-center">
        <p>© 2025 Paperless Post ®</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="#">Terms & Privacy</Link> |
          <Link href="#">Privacy Snapshot</Link> |
          <Link href="#">Cookie Policy</Link> |
          <Link href="#">Your Privacy Choices</Link> |
          <Link href="#">Accessibility Statement</Link>
        </div>
      </div>
    </footer>
  );
}
