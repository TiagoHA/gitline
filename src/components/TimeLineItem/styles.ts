import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 605px;
  padding: 0 40px;

  display: flex;

  margin-top: 13px;
  margin-left: -6px;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    justify-content: flex-start !important;
    margin-left: 10% !important;
    align-self: flex-start !important;
    width: 100% !important;
    padding-right: calc(10% + 40px) !important;
    margin-bottom: 13px;
  }
`;

export const TimelinePoint = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  margin-top: 10px;
  left: 50%;
  margin-left: -8px;
  border-radius: 50%;
  background: var(--box);
  border: 5px solid var(--primary);
  box-sizing: content-box;

  @media (max-width: 600px) {
    left: 10%;
  }
`;

export const Arrow = styled.div`
  box-sizing: content-box;
  width: 11px;
  height: 11px;
  background: var(--box);
  margin-top: 13px;
  border-top: 1px solid var(--border);
  border-right: 1px solid var(--border);
  z-index: 5;

  &.right {
    margin-right: -6px;
    transform: rotateZ(225deg);
  }

  &.left {
    margin-left: -6px;
    box-shadow: 2px -1px 1px -1px rgba(0, 0, 0, 0.2);
    transform: rotateZ(45deg);
  }
`;

export const Content = styled(motion.div)`
  &.right {
    display: flex;
    flex-direction: row;
  }
  &.left {
    display: flex;
    flex-direction: row-reverse;
  }

  @media (max-width: 600px) {
    flex: 1;
  }
`;

export const Item = styled.div`
  width: 235px;
  padding: 16px;
  background: var(--box);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    flex: 1;
  }
`;

export const Date = styled.time`
  font-family: 'Russo One', sans-serif;
  font-size: 14px;
  color: var(--box);
  background: var(--secondary);
  padding: 6px 9px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  margin-bottom: 22px;
`;

export const Name = styled.a`
  align-self: stretch;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 8px;
  color: var(--text-primary);
  word-wrap: break-word;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: var(--secondary);
  }
`;

export const Description = styled.p`
  flex: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: var(--text-secondary);
`;
