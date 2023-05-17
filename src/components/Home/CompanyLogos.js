import Alibaba from "../../assets/logos/Alibaba.svg";
import Amazon from "../../assets/logos/Amazon.svg";
import Daraz from "../../assets/logos/Daraz.pk Logo.svg";
import Ebay from "../../assets/logos/Ebay.svg";
import Rakuten from "../../assets/logos/Rakuten.svg";
import Target from "../../assets/logos/Target.svg";
import Walmart from "../../assets/logos/Walmart.svg";
function CompanyLogos() {
    return (
    <div className="my-5 mx-auto max-w-[1000px] flex gap-6 justify-center flex-col md:flex-row items-center border-0 md:border-2 py-5 border-base-100 border-t-yellow-100 border-b-yellow-100">
        <div className="gap-6 grid grid-cols-4 justify-items-center items-center">
            <img src={Amazon} alt="logo" />
            <img src={Alibaba} alt="logo" />
            <img src={Daraz} alt="logo" />
            <img src={Ebay} alt="logo" />
        </div>
        <div className="gap-6 grid grid-cols-3 justify-items-center items-center">
            <img src={Rakuten} alt="logo" />
            <img src={Target} alt="logo" />
            <img src={Walmart} alt="logo" />
        </div>
    </div>
    )
}

export default CompanyLogos;