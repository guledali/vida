import React from 'react'
import CodeEditor from 'src/components/CodeEditor'
import {
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

import { Form } from '@redwoodjs/forms'

const CSS = {
  label: 'block text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-1 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-1 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

interface DashboardFormProps {
  dashboard: object
}

class DashboardForm extends React.Component<DashboardFormProps> {
  private dashboard: object

  constructor(props: DashboardFormProps) {
    super(props)
    this.dashboard = props.dashboard
  }

  onSubmit = (data: object) => {
    data.json = this.dashboard.json
    this.props.onSave(this.dashboard.id, data)
  }

  onCodeChange = (value, e) => {
    this.dashboard.json = value
  }

  onPreview = () => {
    this.props.onPreview(dashboard.id, dashboard.json)
  }

  onEditorChange = () => {

  }

  render() {
    return (
      <div className="box-border text-sm col-span-1 bg-gray-100 p-2" style={{height: "100%"}}>
        <Form onSubmit={this.onSubmit} error={this.props.error} style={{height: "100%"}}>
          <FormError
            error={this.props.error}
            wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-2 mb-4"
            titleClassName="mt-0 font-semibold"
            listClassName="mt-2 list-disc list-inside"
          />

          <Label
            name="name"
            className={CSS.label}
            errorClassName={CSS.labelError}
          >Name</Label>
          <TextField
            name="name"
            defaultValue={this.props.dashboard?.name}
            className={CSS.input}
            errorClassName={CSS.inputError}
            validation={{ required: true }}
          />
          <FieldError name="name" className={CSS.errorMessage} />

          <Label
            name="json"
            className={CSS.label + " mt-2"}
            errorClassName={CSS.labelError}
            >JSON</Label>

          <div style={{height: "calc(100% - 90px)"}}>
            <CodeEditor jsonText={this.props.dashboard?.json} onChange={this.onCodeChange} />
          </div>

          <FieldError name="json" className={CSS.errorMessage} />

          <div className="text-center mt-1">
            <Submit
              disabled={this.props.loading}
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Save
            </Submit>

            <button
              className="ml-2 bg-green-600 text-white hover:bg-green-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              title="Ctrl+Enter"
              type="button"
              onClick={this.onPreview}
            >
              Preview
            </button>

            <button
              className="ml-2 bg-orange-600 text-white hover:bg-orange-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              type="button"
              onClick={this.onEditorChange}
            >
              Editor
            </button>
          </div>
        </Form>
      </div>
    )
  }
}

export default DashboardForm
