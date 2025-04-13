export default function SidebarNavItem({ id, label, activeId, children = [] }) {
    return (
      <li>
        <a
          href={`#${id}`}
          style={{
            color: activeId === id ? 'black' : '#9ecadf',
          }}
        >
          {label}
        </a>
        {children.length > 0 && (
          <ul style={{ marginLeft: '1rem' }}>
            {children.map((child) => (
              <SidebarNavItem
                key={child.id}
                {...child}
                activeId={activeId}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }