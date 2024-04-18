import React from "react";
import AdminNav from "../../pages/admin/layout";
import styled from "./project.module.css";
import { useState } from "react";
import { TextWrapper } from "../../pages/project";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import DragAndDropMultiUpload from "./module/DragAndDropUpload";
import YouTubePreview from "./module/YouTubePreview";

function ProjectInsert(){
    const [inputs, setInputs] = useState(['']);

    //새로운 input 추가
    const addInput = () => {
        setInputs([...inputs, '']);
    };

    //input 값 변경
    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    }

    // input 삭제
    const removeInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };
    
    
    return (
        <>
            <AdminNav />
            <div className={styled.insertDiv}>
                <div className={styled.mainWarp}>
                    <TextWrapper>
                        <img
                            src="https://www.bulnande.kr/assets/bulbu_symbol.png"
                            alt=""
                        />
                        프로젝트 입력
                    </TextWrapper>

                    <Form.Label htmlFor="projectTitle">프로젝트 구분</Form.Label>
                    <Form.Check type="radio" name="group" id="long" label="장기프로젝트" /> 
                    <Form.Check type="radio" name="group" id="short" label="단기프로젝트" />

                    <div className={styled.insertDiv} />

                    <Form.Label htmlFor="projectTitle">프로젝트 이름</Form.Label>
                    <Form.Control 
                        type="text"
                        id="projectTitle"
                    />
                    <div className={styled.insertDiv} />
                    
                    <Form.Label htmlFor="reqInput">필수 입력내용</Form.Label>
                    <div className={styled.input_area}>
                        <Form.Control size="sm" placeholder="행사명" className={styled.title_input} />&nbsp;
                        <Form.Control size="sm" placeholder="내용" className={styled.con_input} />
                    </div>
                    <div className={styled.input_area}>
                        <Form.Control size="sm" placeholder="행사일시" className={styled.title_input} />&nbsp;
                        <Form.Control size="sm" placeholder="내용" className={styled.con_input} />
                    </div>
                    <div className={styled.input_area}>
                        <Form.Control size="sm" placeholder="행사분류" className={styled.title_input} />&nbsp;
                        <Form.Control size="sm" placeholder="내용" className={styled.con_input} />
                    </div>
                    <div className={styled.input_area}>
                        <Form.Control size="sm" placeholder="행사회차" className={styled.title_input} />&nbsp;
                        <Form.Control size="sm" placeholder="내용" className={styled.con_input} />
                    </div>
                    <div className={styled.input_area}>
                        <Form.Control size="sm" placeholder="공연자" className={styled.title_input} />&nbsp;
                        <Form.Control size="sm" placeholder="내용" className={styled.con_input} />
                    </div>

                    <div className={styled.insertDiv} />

                    <Form.Label htmlFor="addInput">추가 입력내용</Form.Label>
                    {inputs.map((input, index) => (
                        <div key={index} className={styled.input_area}>
                            <Form.Control
                            size="sm"
                            value={input}
                            name={index[index]}
                            className={styled.title_input}
                            placeholder="제목"
                            onChange={(e) => handleChange(index, e.target.value)}
                            />&nbsp;
                            <Form.Control
                            size="sm"
                            value={input}
                            name={index[index]}
                            className={styled.con_input}
                            placeholder="내용"
                            onChange={(e) => handleChange(index, e.target.value)}
                            /> &nbsp;&nbsp;
                            <ButtonGroup aria-label="Basic">
                                <Button onClick={addInput}>+</Button>
                                {index > 0 ? <Button onClick={() => removeInput(index)}>-</Button> : ""}
                            </ButtonGroup>
                        </div>
                    ))}

                    <div className={styled.insertDiv} />

                    <Form.Label htmlFor="addInputPic">행사사진</Form.Label>
                    {/* 행사 사진 업로드 컴포넌트 */}
                        <DragAndDropMultiUpload />
                    
                    <div className={styled.insertDiv} />

                    <Form.Label htmlFor="addInputPic">행사 영상 링크</Form.Label>
                        <YouTubePreview />
                </div>
            </div>
        </>
    );
}

export default ProjectInsert;