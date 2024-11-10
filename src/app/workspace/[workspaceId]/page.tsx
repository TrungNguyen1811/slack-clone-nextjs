interface WorkspacesIdPageProp {
  params: {
    workspaceId: string;
  };
}
const WorkspacesIdPage = ({ params }: WorkspacesIdPageProp) => {
  return <div>ID: {params.workspaceId}</div>;
};
export default WorkspacesIdPage;
