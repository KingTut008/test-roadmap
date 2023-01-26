import { useEffect } from 'react';
import { Table, Divider, Spin, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { applicationsActions, loadApplications } from '../../reducers/applicationsSlice';
import { useActionCreators } from '../../hooks/useActionCreators';
import { getPolyline } from '../../sagas';
import './style.scss';

const getColums = (data) => {
  let columns = [];
  if (data.length) {
    Object.keys(data[0]).forEach((value) => {
      columns = [
        ...columns,
        {
          title: value,
          dataIndex: value,
          key: value,
        },
      ];
    });
  }

  return columns;
};

const getData = (data) => {
  return data.map((el) => ({ ...el, key: el.id }));
};

const Applications = () => {
  const applications = useSelector((state) => state.applications.applicationsItems);
  const status = useSelector((state) => state.applications.status);
  const error = useSelector((state) => state.applications.error);
  const actions = useActionCreators({
    ...applicationsActions,
    loadApplications,
    getPolyline,
  });

  useEffect(() => {
    actions.loadApplications();
  }, []);

  const columns = getColums(applications);
  const data = getData(applications);

  const render = () => {
    if (status === 'loading') {
      return (
        <div className="Application__Loading">
          <Spin tip="Загрузка">
            <div className="content" />
          </Spin>
        </div>
      );
    }

    if (status === 'error') {
      return <Typography.Text type="danger">{error}</Typography.Text>;
    }

    return (
      <Table
        rowSelection={{
          type: 'radio',
          onChange: (selectedRowKeys, selectedRows) => actions.getPolyline(selectedRows[0]),
        }}
        columns={columns}
        dataSource={data}
      />
    );
  };

  return (
    <>
      <Divider>Заявки</Divider>
      {render()}
    </>
  );
};

export { Applications };
