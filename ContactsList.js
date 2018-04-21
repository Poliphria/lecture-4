import React from 'react'
import Row from './Row'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

const renderItem = ({item}) => <Row {...item}/>

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => (
    <SectionList
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[{
            title: 'A',
            data: props.contacts
        }]}
    />
)

ContactsList.propTypes = {
    contacts: PropTypes.array
}

export default ContactsList