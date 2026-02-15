import { describe, test, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react'
import { useHeroSummary } from './useHeroSummary';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';

const tanStackCustomProvider = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false
            }
        }
    })
    return ({ children }: PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

describe('useHeroSummary', () => {
    test('Should return the initialState (isLoading)', () => {
        const { result } = renderHook(() => useHeroSummary(), {
            wrapper: tanStackCustomProvider()
        })
        expect(result.current.isLoading).toBe(true)
        expect(result.current.isError).toBe(false)
        expect(result.current.data).toBeUndefined()
    })

    test('Should return success state with data when API call succeeds', async () => {
        const { result } = renderHook(() => useHeroSummary(), {
            wrapper: tanStackCustomProvider()
        })

        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
            console.log(result.current);
        })


    })
})
