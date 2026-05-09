import NavTabs from './NavTabs'

const Tabs = () => {
  const tabs = ["Home", "Shop", "About", "Contact Us"]
  return (
    <div className='flex gap-12'>
      {tabs.map(function (tab, index) {
        return <NavTabs key={index} tab={tab} />;
      })}
    </div>
  );
};

export default Tabs;
