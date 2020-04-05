import React from 'react'
import styled from 'styled-components'

import CollectionItems from './CollectionItems'
import collections from '../../data/collections'

const Collections = () => {
    return (
        <CollectionBox>
        {
            collections.map(( collection ) => (
                <Collection key={collection.id}>
                    <CollectionName>{collection.name}</CollectionName>

                    <CollectionItems items={collection.items} />

                    <CollectionPrice>
                        <TotalPrice>= ₩ 789,600</TotalPrice>
                    </CollectionPrice>
                </Collection>
        ))}
        </CollectionBox>
    )
}

const CollectionBox = styled.div`
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar {display:none;}
    padding: 0 20px;
`

const Collection = styled.div`
    width: 300px;
    padding: 20px 20px;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.1);
    border-radius: 7px;
    margin-bottom: 20px;
`

const CollectionName = styled.p`
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`

const CollectionPrice = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 20px;
    margin-top: 30px;
`

const TotalPrice = styled.p`
    margin: 0;
    font-size: 24px;
    font-weight: bold;
`


export default Collections