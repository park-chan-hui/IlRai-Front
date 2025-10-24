import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <div className="gap-2xs flex min-h-screen items-center justify-items-center">
      <Button>버튼</Button>
      <Button variant="secondary">버튼</Button>
      <Button variant="outline">버튼</Button>
    </div>
  );
}
