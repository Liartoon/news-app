import React, {Fragment} from 'react';
import {NewsForm} from '../components/NewsForm';
import {Alert} from '../components/Alert';

export const CreateNews = () => 
{
    return (
    <Fragment>
    <Alert />
    <NewsForm />
    </Fragment>
)
}