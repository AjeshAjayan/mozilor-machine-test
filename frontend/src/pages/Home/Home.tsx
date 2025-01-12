import { Card, Flex, Pagination } from "antd"

export const HomePage = () => {
    return (
        <Flex vertical justify="center" align="center" gap={24}>
            <Flex style={{ paddingLeft: '8rem' }} gap={20} wrap>
                <Card title="Total number of products" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
                <Card title="Name" bordered={false} style={{ width: 300 }}>
                    <div>
                        <label>SKU: 123345</label>
                    </div>
                    <div>
                        <label>Price: 100</label>
                    </div>
                    <p style={{ margin: 0 }}>description</p>
                </Card>
            </Flex>
            <Pagination defaultCurrent={1} 
                total={50} 
                showSizeChanger 
                onShowSizeChange={() => {}}
                defaultPageSize={20}
                onChange={() => {}}
            />
        </Flex>
    )
}