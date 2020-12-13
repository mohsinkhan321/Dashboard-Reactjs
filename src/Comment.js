import React from "react";

const Comment = () => {
  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card p-3">
              <div className="card-header border-0">
                  <div className="card-title">
                    <div className="user-panel d-flex border-0">
                      <div className="image">
                        <img
                          src="dist/img/user1-128x128.jpg"
                          className="img-circle elevation-2"
                          alt="User"
                        />
                      </div>
                      <div className="info">
                        <h6 className="mb-0 d-block">
                          Elizeu Dias
                        </h6>
                        <p className="mb-0  smpara" >Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-0 mt-0 card-body table-responsive w-75 p-0">
                  <h5 className="smhed pt-0 mt-0">Important Notice: scheduled Maintenance of SMS</h5>
                  <p className="smpara">
                    Dear SMS Users,<br/>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    type and scrambled it to make a type specimen book.
                    electronic typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
