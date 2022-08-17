import React, {useState} from 'react'
import Form from '../components/Form/Form'
import Header from '../components/Header/Header'
import Layout from '../components/Layout/Layout'
import List from '../components/List/List'


function TodoList(){
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "리액트 공부",
            body: "어쩌고 저쩌고",
            isDone: false
        },
        {
            id:2,
            title: "리액트 공부",
            body: "저쩌고 어쩌고",
            isDone: true
        }
    ])
    return (
        <Layout>
            <Header/>
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </Layout>
    )
}
export default TodoList

//useState 라는 함수
//Hook이란 특별한 함수
//예를 들어 useState는 state, 상태를 함수 컴포넌트 안에서 사용할수 있게 해둠
//원래는 hooks가 나오기 전에는 리액트에서 클래스형 컴포넌트에서만 상태를 이용할수 있어씀
//함수형 컴포넌트는 그냥 데이터 가져와서 보여주는 용도로만 사용했음
//useState함수는 state의 초기값을 인자로 넘겨주어야함

//state에 클래스 컴포넌트와 달리 반드시 객체일 필요는 없고, 숫자나 문자를 가질수 있음
//useState가 반환하는 값은 state변수, 그리고 해당 변수를 갱신할수 있는 함수. 이 두가지 쌍을 반환함

//객체 구조분해 문법을 사용해서 useState함수를 호출하고 바로 반환하는 state변수와 해당 변수를 갱신하는 함수를 받아와서 사용 가능
