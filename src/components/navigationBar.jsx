const NavigationBar = () => {
    const arrayItems = ["Features", "Pricing", "Download", "Company", "Support" ];
   return arrayItems && arrayItems.map((item, id) => {
      return (
        <div className="navigation-container">
          {item}
        </div>
      )
      })
}
export default NavigationBar;