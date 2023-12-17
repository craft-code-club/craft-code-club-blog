import Header from "@/components/header/header";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {mobileWrapper} from "@/components/shared/test-utils";

test("Logo should be visible", () => {
  render(<Header />)
  expect(screen.getByRole("image")).toBeInTheDocument()
})

test("Craft Code Club should be visible", () => {
  render(<Header />)
  expect(screen.getByText("Craft & Code Club")).toBeInTheDocument()
})

test("Craft Code Club should not be visible in mobile", () => {
  render(<Header />, { wrapper: () => mobileWrapper })
  expect(screen.queryByText("Craft & Code Club")).not.toBeInTheDocument()
})

test('The menu should provide links to "home" and "study group"', () => {
  render(<Header />)
  const links = screen.getAllByRole("link")
  const linkHome = links.find(x => x.getAttribute("href") == "/")
  const linkStudyGroup = links.find(x => x.getAttribute("href") == "/study-group")

  expect(links).toHaveLength(2)
  expect(linkHome).toBeDefined()
  expect(linkStudyGroup).toBeDefined()
})
