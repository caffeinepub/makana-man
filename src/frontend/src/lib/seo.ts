import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function usePageMeta(description: string) {
  useEffect(() => {
    let metaDescription = document.querySelector('meta[name="description"]');
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute('content', description);
  }, [description]);
}
