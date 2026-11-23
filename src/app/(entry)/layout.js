import { Document, sharedMetadata } from '../../components/document';

export const metadata = sharedMetadata;

export default function Layout({ children }) {
  return <Document lang="hr">{children}</Document>;
}
