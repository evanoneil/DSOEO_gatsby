const React = require('react')
const BlockContent = require('@sanity/block-content-to-react')
const client = require('@sanity/client')({
  projectId: '0xfk5i93',
  dataset: 'production',
  useCdn: true
})

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}
const PortableText = ({blocks}) => (
  <PortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
)

export default PortableText