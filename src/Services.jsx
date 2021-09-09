import Card from "./Card";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="tab-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <div className="col-md-4 col-10 mx-auto">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
              </div>
            </div>
          </div>

      </div>
    </>
  );
};
export default Services;
