import React from 'react';
import MySelect from '../UI/select/MySelect';
import MyInput from '../UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='Search'
            />
            <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Sort for ..."}
                options={[
                {value: 'title', name: 'For name'},
                {value: 'body', name: 'For description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;