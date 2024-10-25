import React from 'react'
import "./Task.css"

function Task() {
    return (
        <>
            <div>
                <div className='task-info'>
                    <div>
                        <button className='btn-1'>Add Task</button>
                    </div>
                    <div>
                        <button className='btn-2' style={{ width: "100px", display: "flex", justifyContent: "space-between", borderRadius: "5px" }}>All
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div className='task-data'>
                    <div style={{ padding: "30px", borderRadius:"10px"}} className='task-about'>
                        <div className='task-items'>
                            <div style={{ display: 'flex', gap: "15px" }}>
                                <input type="checkbox" name="" id="" style={{ scale: '2.5' }} />
                                <div>
                                    <h4>GYM</h4>
                                    <p>10:27 AM 08/01/2024</p>
                                </div>
                            </div>
                            <div>
                                <button style={{marginRight:"10px", border:"none"}}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button style={{border:"none"}}>
                                    <i class="fa-solid fa-pencil"></i>
                                </button>
                            </div>
                        </div>
                        <div>
                        <div className='task-items'>
                            <div style={{ display: 'flex', gap: "15px" }}>
                                <input type="checkbox" name="" id="" style={{ scale: '2.5' }} />
                                <div>
                                    <h4>GYM</h4>
                                    <p>10:27 AM 08/01/2024</p>
                                </div>
                            </div>
                            <div>
                                <button style={{marginRight:"10px", border:"none"}}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button style={{border:"none"}}>
                                    <i class="fa-solid fa-pencil"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='task-items'>
                            <div style={{ display: 'flex', gap: "15px" }}>
                                <input type="checkbox" name="" id="" style={{ scale: '2.5' }} />
                                <div>
                                    <h4>GYM</h4>
                                    <p>10:27 AM 08/01/2024</p>
                                </div>
                            </div>
                            <div>
                                <button style={{marginRight:"10px", border:"none"}}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button style={{border:"none"}}>
                                    <i class="fa-solid fa-pencil"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='task-items'>
                            <div style={{ display: 'flex', gap: "15px" }}>
                                <input type="checkbox" name="" id="" style={{ scale: '2.5' }} />
                                <div>
                                    <h4>GYM</h4>
                                    <p>10:27 AM 08/01/2024</p>
                                </div>
                            </div>
                            <div>
                                <button style={{marginRight:"10px", border:"none"}}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                                <button style={{border:"none"}}>
                                    <i class="fa-solid fa-pencil"></i>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task