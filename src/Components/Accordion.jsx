const Accordion = () => {
  return (
    <div className="mb-6 md:mb-20 mt-0 md:mt-12 px-2 md:px-3 xl:px-0" data-aos="slide-up">
      <div className="divider text-logo divider-neutral pb-5 md:pb-12">
        <h2 className="text-lg md:text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <div className="collapse collapse-plus bg-green-logo">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-base md:text-xl font-medium text-white">
            What are the benefits of using CouponHive?
          </div>
          <div className="collapse-content">
            <p className="text-white text-xs md:text-base">
              CouponHive provides a convenient way for users to save money by
              aggregating discount codes and special offers from various
              retailers and service providers. By using coupon codes found on
              CouponHive, shoppers can enjoy cost savings at checkout, making
              their purchases more affordable. The platform often features
              exclusive offers not readily available on retailer websites,
              adding extra value for users. With a diverse range of categories
              such as fashion, electronics, travel, and food, CouponHive caters
              to different shopping needs and interests. Its regularly updated
              listings ensure that users have access to the latest, active
              deals, enhancing the shopping experience. Additionally, the
              simplicity of applying these codes during checkout makes saving
              money easier and more accessible for everyone.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-green-logo">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title  font-medium text-white text-base md:text-xl">
            What is CouponHive cashback?
          </div>
          <div className="collapse-content">
            <p className="text-white text-xs md:text-base">
              CouponHive cashback refers to a reward system where users earn a
              percentage of their purchase amount back as a form of incentive.
              When shoppers make a purchase through links or promotions provided
              by CouponHive, a portion of the purchase value is returned to
              them, typically as credit, cash, or a digital balance that can be
              redeemed later. Here's how it generally works: users visit the
              CouponHive website, search for deals or cashback offers on their
              desired retailer, and then follow the provided link to complete
              their purchase. The retailer pays a commission to CouponHive for
              directing traffic and generating sales. CouponHive, in turn,
              shares part of this commission with the shopper in the form of
              cashback. The benefits of cashback through CouponHive include
              additional savings on top of discount codes and promotions, making
              it an attractive option for budget-conscious shoppers. Over time,
              these cashback rewards can accumulate, providing users with
              further discounts or cash to use for future purchases.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-green-logo">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-base md:text-xl font-medium text-white">
            How to Apply a CouponHive Promo Code
          </div>
          <div className="collapse-content">
            <p className="text-white text-xs md:text-base">
              You can apply a promo code only during the checkout process.
              Discounts are not possible after a purchase transaction has been
              finalized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
