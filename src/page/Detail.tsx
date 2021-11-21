import React from 'react';

interface Props {
  user: string | null;
}

const Detail: React.FC<Props> = ({ user }: Props) => (<>{user}</>);

export default Detail;
