import { describe, it, expect } from 'vitest';
import { profile, projects, hasResume, mailto } from '@/data/portfolio';
describe('Portfolio authenticity',()=>{
 it('uses the supplied graduation year',()=>expect(profile.graduation).toBe(2027));
 it('does not invent an institution',()=>expect(profile.institution).toBeNull());
 it('does not enable a resume without a supplied PDF',()=>{expect(hasResume(profile.resume)).toBe(false);expect(hasResume('https://example.com/resume.pdf')).toBe(true);expect(hasResume('javascript:alert(1)')).toBe(false)});
 it('does not invent project technologies',()=>expect(projects.every(p=>p.technologies.length===0)).toBe(true));
 it('does not invent project links',()=>expect(projects.every(p=>p.repository===null&&p.demo===null)).toBe(true));
 it('uses the supplied email and encodes the inquiry subject',()=>expect(mailto(profile.email)).toBe('mailto:sunilsn2005@gmail.com?subject=Let%E2%80%99s%20connect%20%E2%80%94%20portfolio%20inquiry'));
});
