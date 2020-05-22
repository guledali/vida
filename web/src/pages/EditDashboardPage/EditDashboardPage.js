import DashboardsLayout from 'src/layouts/DashboardsLayout'
import EditDashboardCell from 'src/components/EditDashboardCell'
import { GAPageView } from '../../PageView'

const EditDashboardPage = ({ id }) => {
  GAPageView()
  return (
    <DashboardsLayout>
      <EditDashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default EditDashboardPage
