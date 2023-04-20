import React, { useState } from "react";
import shortid from "https://cdn.skypack.dev/shortid@2.2.16";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Grid, Avatar, Box } from "@mui/material";
import "./imageUploader.scss";
import { ReactComponent as UploaderIcon } from "src/assets/images/image-uploader.svg";
import { ReactComponent as UploadSkeleten } from "src/assets/images/skeleten.svg";

const ImageUploader = () => {
  const [selectedfile, SetSelectedFile] = useState([]);
  const [Files, SetFiles] = useState([]);

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const InputChange = (e) => {
    // --For Multiple File Input
    let images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i]);
      let reader = new FileReader();
      let file = e.target.files[i];
      reader.onloadend = () => {
        SetSelectedFile((preValue) => {
          return [
            ...preValue,
            {
              id: shortid.generate(),
              filename: e.target.files[i].name,
              filetype: e.target.files[i].type,
              fileimage: reader.result,
              datetime:
                e.target.files[i].lastModifiedDate.toLocaleString("en-IN"),
              filesize: filesizes(e.target.files[i].size),
            },
          ];
        });
      };
      if (e.target.files[i]) {
        reader.readAsDataURL(file);
      }
    }
  };

  const DeleteSelectFile = (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = selectedfile.filter((data) => data.id !== id);
      SetSelectedFile(result);
    } else {
      // alert('No');
    }
  };

  const FileUploadSubmit = async (e) => {
    e.preventDefault();

    // form reset on submit
    e.target.reset();
    if (selectedfile.length > 0) {
      for (let index = 0; index < selectedfile.length; index++) {
        SetFiles((preValue) => {
          return [...preValue, selectedfile[index]];
        });
      }
      SetSelectedFile([]);
    } else {
      alert("Please select file");
    }
  };

  const DeleteFile = async (id) => {
    if (window.confirm("Are you sure you want to delete this Image?")) {
      const result = Files.filter((data) => data.id !== id);
      SetFiles(result);
    } else {
      // alert('No');
    }
  };

  return (
    <div className="fileupload-view">
      <div className="row justify-content-start m-0">
        <div className="col-md-12 column-12">
          <div className="card ">
            <div className="card-body">
              <div className="kb-data-box">
                <div className="kb-modal-data-title">
                  {/*  <div className="kb-data-title">
                    <h6>Multiple File Upload With Preview</h6>
                  </div> */}
                </div>
                <form onSubmit={FileUploadSubmit}>
                  <div className="kb-file-upload">
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="fileupload"
                        className="file-upload-input"
                        onChange={InputChange}
                        multiple
                      />
                      {/* <span>
                        Drag and drop or{" "}
                        <span className="file-link">Choose your files</span>
                      </span> */}
                      <UploaderIcon className="file-link" />
                    </div>
                  </div>
                </form>
                <div className="kb-attach-box ">
                {/*   <Box className="skeleten-avtar">
                    <Avatar variant="square" className="upload-skeleten">
                      <UploadSkeleten className="skeleten" />
                    </Avatar>
                  </Box> */}
                  {selectedfile.map((data, index) => {
                    const {
                      id,
                      filename,
                      filetype,
                      fileimage,
                      datetime,
                      filesize,
                    } = data;
                    return (
                      <div className="file-atc-box" key={id}>
                        {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                          <div className="file-image">
                            {" "}
                            <img src={fileimage} alt="" />
                          </div>
                        ) : (
                          <div className="file-image">
                            <i className="far fa-file-alt"></i>
                          </div>
                        )}
                        <div className="file-detail">
                          {/*  <h6 className="file">{filename}</h6>
                            <p></p>
                            <p>
                              <span>Size : {filesize}</span>
                              <span className="ml-2">
                                Modified Time : {datetime}
                              </span>
                            </p> */}
                          <div className="file-actions">
                            <button
                              type="button"
                              className="file-action-btn"
                              onClick={() => DeleteSelectFile(id)}
                            >
                              <CloseIcon className="close-icon" />
                            </button>
                          </div>
                          {/*  <div className="file-actions">
                              <Button
                                startIcon={<CloseIcon className="close-icon" />}
                                className="file-action-btn"
                                onClick={() => DeleteSelectFile(id)}
                              ></Button>
                            </div> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* {Files.length > 0 ? (
                  <div className="kb-attach-box">
                    <hr />
                    {Files.map((data, index) => {
                      const {
                        id,
                        filename,
                        filetype,
                        fileimage,
                        datetime,
                        filesize,
                      } = data;
                      return (
                        <div className="file-atc-box" key={index}>
                          {filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                            <div className="file-image">
                              {" "}
                              
                            </div>
                          ) : (
                            <div className="file-image">
                              <i className="far fa-file-alt"></i>
                            </div>
                          )}
                          <div className="file-detail">
                            <h6>{filename}</h6>
                            <p>
                              <span>Size : {filesize}</span>
                              <span className="ml-3">
                                Modified Time : {datetime}
                              </span>
                            </p>
                            <div className="file-actions">
                              <button
                                className="file-action-btn"
                                onClick={() => DeleteFile(id)}
                              >
                                <CloseIcon className="close-icon" />
                              </button>

                              <a
                                href={fileimage}
                                className="file-action-btn"
                                download={filename}
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <button
                                type="button"
                                className="file-action-btn"
                                onClick={() => DeleteSelectFile(id)}
                              >
                                <CloseIcon className="close-icon" />
                              </button> */}
    </div>
  );
};

export default ImageUploader;
