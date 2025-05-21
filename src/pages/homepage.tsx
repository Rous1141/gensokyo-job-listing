import  { useEffect, useState } from 'react'
import { Button, Card, List, Space, Tag, Typography } from 'antd';
import { IJobProps } from '../api/Job/IJob'
import { FetchJob } from '../api/Job/JobAPI'
import styles from '../css/homepage.module.css'
import useAuths from '../hooks/useAuths';
const { Title, Text } = Typography;
export default function HomePage() {
  const [jobList, setJobList] = useState<IJobProps[]>([])
  const current_account = useAuths((state) => state.current_account)
  const fetchJobList = async () => {
    try {
      const response = await FetchJob();
      if (Array.isArray(response) && response.length > 0) {
        setJobList(response);
      }
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    }
  };
  useEffect(() => {
    fetchJobList()
  },[])
  return (
<div className={styles.homepage}>
      <Title level={2} className={styles.title}>
        Available Jobs for {current_account?current_account.username:'Guest'}
      </Title>
      <List
        grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 3 }}
        dataSource={jobList}
        renderItem={(job) => (
          <List.Item>
            <Card
              title={<Text strong className={styles.title}>{job.jobName}</Text>}
              extra={
                <Tag color={job.isActive ? 'green' : 'red'}>
                  {job.isActive ? 'Active' : 'Inactive'}
                </Tag>
              }
              className={styles.card}
            >
              <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <Text className={styles.text}>{job.jobDescription}</Text>
                <Text className={styles.text}>
                  Salary: ${job.jobSalary.toLocaleString()}
                </Text>
                <Text className={styles.text}>Slots: {job.jobSlot}</Text>
                <Text className={styles.text}>
                  Posted: {new Date(job.createdAt).toLocaleDateString()}
                </Text>
                <Button
                  type="primary"
                  className={styles.primaryButton}
                  onClick={() => console.log(`View job ${job.id}`)} // Placeholder for navigation
                >
                  View Details
                </Button>
              </Space>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

