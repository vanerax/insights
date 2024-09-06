import {Map} from './map'

export function VisualReport(props) {
    return (
        <div id="visual-report">
            <Map></Map>
            {props.children}
        </div>
    )
}