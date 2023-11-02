import { Avatar, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { removeUserInfo } from '@/services/auth.service';
import { authKey } from '@/constants/storagekey';
import { useRouter } from 'next/navigation';

const { Header: AntHeader } = Layout;

const Header = () => {

    const router = useRouter()
    const logout = () => {
        removeUserInfo(authKey)
        router.push("/login")
    }



    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button
                    onClick={logout}
                    type="text" danger
                >
                    Logout
                </Button>
            )
        },

    ];

    return (
        <AntHeader
            style={{
                background: "#fff"
            }}
        >
            <Row
                justify="end"
                align="bottom"
                style={{
                    height: "100%"
                }}
            >
                <Dropdown menu={{ items }}>
                    <Space wrap size={16}>
                        <Avatar
                            size={54}
                            icon={<UserOutlined />}>
                        </Avatar>
                    </Space>
                </Dropdown>

            </Row>
        </AntHeader>
    );
};

export default Header;