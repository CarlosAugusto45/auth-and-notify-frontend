import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  border: 0;
  background: none;
  position: relative;

  ${(props) =>
    props.hasUnread &&
    css`
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        top: 0;
        right: 0;
        position: absolute;
        border-radius: 50%;
        background: orangered;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: 280px;
  top: calc(100% + 30px);
  left: calc(50% - 140px);
  position: absolute;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);

  &::before {
    content: '';
    width: 0;
    height: 0;
    top: -20px;
    left: calc(50% - 20px);
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Notification = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  padding: 20px;

  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }

  p {
    margin: 3px 0;
    color: #fff;
    font-size: 14px;
  }

  button {
    margin-right: 3px;
    border: 0;
    color: #eee;
    font-size: 12px;
    background: none;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.2, '#eee')};
    }
  }

  span {
    color: #fff;
    font-size: 14px;
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: orangered;
      }
    `}
`;
