import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
const Basket = observer(() => {
  const { device, user, a } = useContext(Context);
  const [orderVisible, setOrderVisible] = useState(false);

  useEffect(() => {});

  return <div>Basket</div>;
});
export default Basket;
