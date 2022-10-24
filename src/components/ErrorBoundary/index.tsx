/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ErrorInfo, ReactNode } from 'react'
import * as S from './styles'
import emptyImg from '/assets/404.svg'
type Props = ReactNode

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <S.Container>
          <p>Ooops!! Como vc chegou aqui?</p>
        </S.Container>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
