import React from 'react'
import {render} from '@testing-library/react'
import Button from './index'
import { BrowserRouter as Router } from 'react-router-dom'


test("Seharusnya gak bisa di klik kalau isDisable ada", ()=> {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument(); //expetasinya terbaca ada span.disable di dokumen
})

test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);
  
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector("span")).toBeInTheDocument(); //ada spa di dokumen
  });
  
  test("Should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>);
  
    expect(container.querySelector("a")).toBeInTheDocument();
  });
  
  test("Should render <Link> component", () => {
    const { container } = render(
      <Router>
        <Button href="" type="link"></Button>
      </Router>
    );
  
    expect(container.querySelector("a")).toBeInTheDocument();
  });
  