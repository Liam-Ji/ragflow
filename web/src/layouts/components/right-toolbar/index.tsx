import { Space } from 'antd';
import React from 'react';
import User from '../user';

import { useTheme } from '@/components/theme-provider';
import { MoonIcon, SunIcon } from 'lucide-react';
import styled from './index.less';

const Circle = ({ children, ...restProps }: React.PropsWithChildren) => {
  return (
    <div {...restProps} className={styled.circle}>
      {children}
    </div>
  );
};

const RightToolBar = () => {
  const { setTheme, theme } = useTheme();

  const onMoonClick = React.useCallback(() => {
    setTheme('light');
  }, [setTheme]);
  const onSunClick = React.useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  return (
    <div className={styled.toolbarWrapper}>
      <Space wrap size={16}>
        <Circle>
          {theme === 'dark' ? (
            <MoonIcon onClick={onMoonClick} size={20} />
          ) : (
            <SunIcon onClick={onSunClick} size={20} />
          )}
        </Circle>
        <User></User>
      </Space>
    </div>
  );
};

export default RightToolBar;
