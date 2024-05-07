import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import type { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { fetchGet } from '../../api/fetchData';
import { Spin } from 'antd';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Статистика по приемам',
        },
    },
};

export const Chart = () => {
    const [dt, setDt] = useState<ChartData<'bar', number[], string> | null>(null);

    useEffect(() => {
        fetchGet('Chart').then((d) => setDt(d));
    }, []);

    return dt ? <div><h1>Статистика по приемам</h1><Bar options={options} data={dt} /></div> : <Spin />;
};
