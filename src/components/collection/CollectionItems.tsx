import React from 'react'
import styled from 'styled-components'

const CollectionItems = ({ items }) => {
    return items.map(( item ) => (
        <CollectionItem key={item.id}>
            <ItemImage src={item.imageUrls} />
            <ItemInfo>
                <div>
                    <ItemBrand>{item.brand}</ItemBrand>
                    <ItemName>{item.name}</ItemName>
                </div>
                <ItemPrice>₩ {item.price}</ItemPrice>
            </ItemInfo>
        </CollectionItem>
    ))
}

const CollectionItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`

const ItemImage = styled.img`
    width: 20%;
    padding-right: 20px;
`

const ItemInfo = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`
const ItemBrand = styled.p`
    margin: 0;
    margin-bottom: 5px;
    font-weight: bold;
`

const ItemName = styled.p`
    margin: 0;
`

const ItemPrice = styled.p`
    margin: 0;
    font-weight: bold;
`

export default CollectionItems