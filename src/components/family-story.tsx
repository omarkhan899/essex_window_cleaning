import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { ReactNode } from 'react';
import { photos } from '@/lib/photos';
import { PhotoFrame } from './site';

export function FamilyStory({ children }: { children?: ReactNode }) {
  const familyPhotoPath = join(process.cwd(), '.local', 'aaron-son-window-cleaning.webp');
  const familyPhoto = process.env.NODE_ENV === 'development' && existsSync(familyPhotoPath)
    ? { src: 'data:image/webp;base64,' + readFileSync(familyPhotoPath).toString('base64'), alt: 'Aaron’s son trying a window-cleaning pole' }
    : null;

  return <section className="wrap block story">
    {familyPhoto ? <div className="story-photo-pair">
      <PhotoFrame photo={photos.aaron} className="story-photo" sizes="(max-width: 820px) 48vw, (max-width: 1454px) 22vw, 295px" />
      <PhotoFrame photo={familyPhoto} className="story-family-photo" />
    </div> : <PhotoFrame photo={photos.aaron} className="story-photo" />}
    <div>
      <p className="eyebrow">Our story</p>
      <h2>I started this for my family.</h2>
      <p>I wanted to provide for my children and build something they could be proud of. When my son picked up the window-cleaning pole and had a go, I got to share a little of what I do with him. It was a small moment, but it meant a lot to me.</p>
      {children}
    </div>
  </section>;
}
