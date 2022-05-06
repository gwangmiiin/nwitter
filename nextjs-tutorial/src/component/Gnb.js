import { Menu } from 'semantic-ui-react'

export default function Gnb() {
    const activeItem = 'home'
    return(
        <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    )
}