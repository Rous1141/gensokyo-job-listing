
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import styles from '../css/dummy.module.css';

// Interfaces
interface Log {
  time: string;
  user: string;
  action: string;
  details: string;
  status: 'Success' | 'Fail';
}

interface NavItem {
  label: string;
  icon: string; // Placeholder for icon paths
}

const Dummy: React.FC = () => {
  // Sample logs data (placeholder, update with your data)
  const [logs] = useState<Log[]>([
    { time: '13/5/2025 22:00', user: 'admin', action: 'API call', details: 'Success', status: 'Success' },
    { time: '13/5/2025 21:00', user: 'user1', action: 'Login', details: 'Failed', status: 'Fail' },
  ]);

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'My account', icon: 'account-icon' },
    { label: 'Manage Student', icon: 'student-icon' },
    { label: 'Manage Staff', icon: 'staff-icon' },
    { label: 'Manage Advisor', icon: 'advisor-icon' },
    { label: 'Manage Manager', icon: 'manager-icon' },
    { label: 'View system log and monitoring', icon: 'logs-icon' },
    { label: 'Import Data', icon: 'import-icon' },
  ];

  // Export to Excel
  const exportToExcel = () => {
    const headers = [['Thời gian', 'Người dùng', 'Hành động', 'Chi tiết', 'Trạng thái']];
    const formattedData = logs.map(item => ({
      'Thời gian': item.time,
      'Người dùng': item.user,
      'Hành động': item.action,
      'Chi tiết': item.details,
      'Trạng thái': item.status,
    }));
    const ws = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(ws, headers);
    XLSX.utils.sheet_add_json(ws, formattedData, { origin: 'A2', skipHeader: true });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Activity Logs');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const file = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(file, 'Activity_Logs.xlsx');
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logoPlaceholder}>Logo</div>
          <div className={styles.logoAccent}></div>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {index === 1 || index === 5 ? <hr className={styles.divider} /> : null}
              <a href="#" className={styles.navItem}>
                <span className={styles.navIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </React.Fragment>
          ))}
          <hr className={styles.divider} />
          <a href="#" className={styles.logout}>
            <span>Log out</span>
            <span className={styles.logoutIcon}>Logout Icon</span>
          </a>
          <div className={styles.footer}>
            <span>@Powered by AISEA</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>AISEA System</h1>
            <p>Showing total users across the system</p>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Student</span>
              <span className={styles.metricValue}>24,828</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Academic Staff</span>
              <span className={styles.metricValue}>25,010</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Advisor</span>
              <span className={styles.metricValue}>100</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricLabel}>Manager</span>
              <span className={styles.metricValue}>10</span>
            </div>
          </div>
        </header>

        {/* Action Buttons */}
        <section className={styles.actions}>
          <div className={styles.actionColumn}>
            <button className={`${styles.actionButton} ${styles.cancel}`}>Cancel</button>
            <button className={`${styles.actionButton} ${styles.confirm}`}>Confirm</button>
          </div>
          <div className={styles.actionColumn}>
            <button className={`${styles.actionButton} ${styles.import}`} onClick={exportToExcel}>
              Import Data From xlsx
            </button>
            <button className={`${styles.actionButton} ${styles.cancel}`}>Cancel</button>
          </div>
        </section>

        {/* Placeholder Logs Section */}
        <section className={styles.logs}>
          <h2>System Logs and Monitoring</h2>
          <table className={styles.logsTable}>
            <thead>
              <tr>
                <th>Thời gian</th>
                <th>Người dùng</th>
                <th>Hành động</th>
                <th>Chi tiết</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.time}</td>
                  <td>{log.user}</td>
                  <td>{log.action}</td>
                  <td>{log.details}</td>
                  <td className={log.status === 'Success' ? styles.success : styles.error}>
                    {log.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dummy;
