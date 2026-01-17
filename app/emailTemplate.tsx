interface EmailTemplateProps {
  content: string;
}

export function EmailTemplate({ content }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {content}!</h1>
    </div>
  );
}
