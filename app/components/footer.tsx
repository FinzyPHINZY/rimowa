/** biome-ignore-all lint/a11y/useAnchorContent: <> */

import './footer.css';

const Footer = () => {
  return (
    <div className="h-[700px] bg-black text-[#0d0900]">
      {/* clear: both; letter-spacing: 1px; */}
      <div className="px-10 mx-auto max-w-[1560px]">
        <div className="text-white/90 text-[18px] font-light py-[60px]">
          <div className="m-auto flex pb-[60px] border-b border-[#b2ada633]">
            <div className="inline-block w-auto">
              <h3 className="text-[#b2ada6] block text-xs mb-7 uppercase leading-8 tracking-wide">
                {' '}
                {/* letter-spacing: 3px; line-height: 11px; */}
                can we help?
              </h3>
              <p>Please get in touch by phone or email</p>
              {/*   line-height: 28px; */}
            </div>
            <div className="justify-end flex flex-1 items-end text-right">
              <div className="flex pr-8 text-xl">
                <p className="text-2xl mr-2.5">📞</p>
                <p className="">+234 8167817217</p>
              </div>
              <div className="flex pr-8 text-xl">
                <p className="text-2xl mr-2.5">🖂</p>
                <p className="">Client Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto text-[18px] font-light py-[60px]  border-b border-[#b2ada633]">
          <div className="flex">
            <div className="menu-list">
              <h3 className="uppercase">About Rimowa</h3>
              <ul className="list-content">
                <li>
                  <a href="hey" className=""></a>
                  Our Story
                </li>
                <li>
                  <a href="hey" className=""></a>
                  All Products
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Sustainability at RIMOWA{' '}
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Careers
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  News
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Sitemap{' '}
                </li>{' '}
              </ul>
            </div>
            <div className="menu-list">
              <h3 className="uppercase">Support</h3>
              <ul className="list-content">
                <li>
                  <a href="hey" className=""></a>
                  Client Service
                </li>
                <li>
                  <a href="hey" className=""></a>
                  FAQs{' '}
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Create an Account{' '}
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Careers
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  News
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Sitemap{' '}
                </li>{' '}
              </ul>
            </div>
            <div className="menu-list">
              <h3 className="uppercase">Services</h3>
              <ul className="list-content">
                <li>
                  <a href="hey" className=""></a>
                  Store Locator
                </li>
                <li>
                  <a href="hey" className=""></a>
                  How do i set my RIMOWA lock?
                </li>{' '}
                <li>
                  <a href="hey" className=""></a>
                  Register my RIMOWA{' '}
                </li>{' '}
              </ul>
            </div>
            <div className="menu-list">
              <h3 className="uppercase">Legal</h3>
              <ul className="list-content">
                <li>
                  <a href="hey" className="">
                    {' '}
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    {' '}
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    {' '}
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    {' '}
                    Cookie Policy{' '}
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    Cookie Management
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
            <div className="menu-list">
              <h3 className="uppercase">Follow Us</h3>
              <ul className="list-content">
                <li>Insta</li>
                <li>
                  <a href="hey" className="">
                    {' '}
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="hey" className="">
                    {' '}
                    Return Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
