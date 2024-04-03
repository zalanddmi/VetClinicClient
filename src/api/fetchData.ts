import { message } from 'antd';
import { useUserStore } from '../store/userStore';

type TUrlPrams = Record<string, string>;

export const fetchPost = (url: string, payload?: unknown) => {
  return fetchData(url, 'POST', payload);
};

export const fetchGet = (url: string, urlPrams?: TUrlPrams) => {
  return fetchData(url, 'GET', undefined, urlPrams);
};

export const fetchData = async (url: string, method: string, payload?: unknown, urlPrams?: TUrlPrams) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  const current_user = useUserStore.getState().user;
  if (current_user) {
    headers['Authorization'] = `Bearer ${current_user.token}`;
  }
  const urlParamsPostfix = urlPrams ? `?${new URLSearchParams(urlPrams).toString()}` : '';

  const response = await fetch(`${import.meta.env.VITE_API_URL}${url}${urlParamsPostfix}`, {
    method,
    headers,
    body: JSON.stringify(payload),
  });

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 401) {
    useUserStore.getState().logout();
  }

  let message_text;
  try {
    const resData = await response.json();
    message_text = resData.error;
  } catch {
    message_text = 'Ошибка сервера';
  }

  message.error(message_text);
};
