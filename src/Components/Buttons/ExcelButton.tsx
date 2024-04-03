import { Button } from 'antd';
import { fetchGet } from '../../api/fetchData';
import { IEntity } from '../../api/serverTypes';
import { FileExcelOutlined } from '@ant-design/icons';


class FileDownloader {
  static async downloadFile(entity: IEntity): Promise<void> {
    try {
      await fetchGet(`${entity.name}/excel`).then((res) => {
        const a = document.createElement("a");
        a.href = `data:${res.contentType};base64,${res.fileContents}`;
        a.download = res.fileDownloadName;
        a.click();
      });
    } catch (error) {
      console.error('Ошибка при загрузке файла:', error);
    }
  }
}

interface IDownloadButtonProps {
  entity: IEntity;
}

const DownloadButton: React.FC<IDownloadButtonProps> = ({ entity }) => {
  const handleDownload = async () => {
    await FileDownloader.downloadFile(entity);
  };

  return (
    <Button icon={<FileExcelOutlined />} type="primary" onClick={handleDownload}>
      Экспорт в Excel
    </Button>
  );
};

export default DownloadButton;