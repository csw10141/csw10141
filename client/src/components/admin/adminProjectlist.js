import { Link } from "react-router-dom";
import styled from "./adminProjectlist.module.css";
import { dummydata } from "../../data/dummydata";
import { dummydataShort } from "../../data/dummydataShort";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useState } from "react";
import { TextWrapper } from "../../pages/project";

function AdminProject(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //장기프로젝트 데이터 상태
    const [data] = useState(dummydata);

    //단기프로젝트 데이터 상태
    const [shortData] = useState(dummydataShort);

    return (
        <>
            <div className={styled.main_warp}>
                <div className={styled.warp}>
                    <div className={styled.listbox}>
                        <div>
                            Project List 
                        </div>
                    </div>
                    <div className={styled.margin}></div>
                    <div className={styled.listbox}>
                        <div className={styled.editline}>
                            <Link to="/admin/project/insert"><Button>프로젝트 추가</Button></Link>
                            <Form.Select aria-label="Default select">
                                <option value="">:: 선택 ::</option>
                                <option value="result">전체</option>
                                <option value="long">장기프로젝트</option>
                                <option value="short">단기프로젝트</option>
                            </Form.Select>
                        </div>
                        <TextWrapper>
                            <img
                                src="https://www.bulnande.kr/assets/bulbu_symbol.png"
                                alt=""
                            />
                            장기프로젝트
                        </TextWrapper>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>행사명</th>
                                    <th>행사회차</th>
                                    <th>행사분류</th>
                                    <th>기능</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((el, idx) => {
                                    return (
                                        <tr key={el}>
                                            <td>{data[idx].id}</td>
                                            <td>{data[idx].title}</td>
                                            <td>{data[idx].season}</td>
                                            <td>{data[idx].category}</td>
                                            <td>
                                                <Button size="sm">수정</Button>&nbsp;
                                                <Button variant="danger" size="sm" onClick={() => handleShow(true)}>삭제</Button>
                                            </td>
                                        </tr>
                                    )

                                })}
                            </tbody>
                        </Table>

                        <TextWrapper>
                            <img
                                src="https://www.bulnande.kr/assets/bulbu_symbol.png"
                                alt=""
                            />
                            단기프로젝트
                        </TextWrapper>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>행사명</th>
                                    <th>행사일시</th>
                                    <th>행사분류</th>
                                    <th>기능</th>
                                </tr>
                            </thead>
                            <tbody>
                            {shortData.map((el, idx) => {
                                return (
                                    <tr key={el}>
                                        <td>{shortData[idx].id}</td>
                                        <td>{shortData[idx].title}</td>
                                        <td>{shortData[idx].date}</td>
                                        <td>{shortData[idx].category}</td>
                                        <td>
                                            <Button size="sm">수정</Button>&nbsp;
                                            <Button variant="danger" size="sm" onClick={() => handleShow(true)}>삭제</Button>
                                        </td>
                                    </tr>
                                )

                            })}
                            </tbody>
                        </Table>
                    </div>
                    <Modal 
                        show={show} 
                        onHide={handleClose}
                        backdrop="static" 
                        keyboard={false}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>알림</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            정말 삭제 하시겠습니까?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} size="sm">아니오</Button>
                            <Button variant="danger" size="sm">삭제</Button>
                        </Modal.Footer>
                    </Modal>
                    {/* {
                        modalOpen &&
                        <div className={'modal-container'} ref={modalBackground} onClick={e => {
                          if (e.target === modalBackground.current) {
                            setModalOpen(false);
                          }
                        }}>
                          <div className={'modal-content'}>
                            <div className={'modle-title'}>정말로 삭제 하시겠습니까?</div>
                            <div className={'modal-line'}>
                                <button className={'btn'} onClick={() => setModalOpen(false)}>
                                취소
                                </button>
                                <button className={'btn'}>삭제</button>
                            </div>
                          </div>
                        </div>
                      } */}

                </div>
            </div>
        </>
    );
}

export default AdminProject;