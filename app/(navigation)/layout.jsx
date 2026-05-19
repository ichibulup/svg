"use client"

import React, { ReactNode } from "react";
import { Footer } from "gorth-ui/layouts/footer";
import { Navbar } from "gorth-ui/layouts/navbar";
import { Button } from "gorth-ui/custom/button";

export default function SharedLayout({ children }) {
  return (
    <>
      <Navbar>
        <div className="mr-4 flex items-center">
          <Button>
            JP
          </Button>
        </div>
      </Navbar>
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          <div className="container mx-auto p-6">
            {children}
          </div>
        </div>
      </main>
      <Footer>
        <div>
          <Button>
            JP
          </Button>
        </div>
      </Footer>
    </>
  )
}