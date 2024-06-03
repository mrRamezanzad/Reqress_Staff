'use client'

import { ReactNode, useEffect } from 'react'
import './Modal.css'
import Image from 'next/image';

export interface ModalProps {
  id: string
  header?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  labelledBy?: string
}

export default function Modal({ id, header, body, footer, labelledBy = 'modal' }: ModalProps) {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
    require('jquery')
  })

  return (
    // Fix: add style and tabindex
    <div className="modal fade" id={id} aria-labelledby={labelledBy} aria-hidden="true">
      {/* <div className="modal fade" id="more-info-modal" aria-labelledby="moreInfoModalLabel" aria-hidden="true"> */}
      {/* <div className="modal fade" id="more-info-modal" tabindex="-1" aria-labelledby="moreInfoModalLabel" style="display: none;" aria-hidden="true"> */}
      <div className="modal-dialog">
        <div className="modal-content bg-dark shadow-lg">
          {header}
          {body}
          {footer}
        </div>
      </div>
    </div>
  )
}