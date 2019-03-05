import React from 'react'



export default props => (
    <div class="fl w-50-l w-100  pa5-l pa4  black-90 bg-white mh32" >

        <p class=""><img src={props.image} /></p>
<div class="w-40-ns w-100 pr4 fl">
        <h2 class="mt3 fw1 f3 mb3">{props.projectName}</h2>
        <p class="f7 mt0 light-blue lh-copy">{props.projectSkills}</p>
        <p class="mt3 fw1 f6"><a href="{props.link1url}" class="underline moon-gray">> {props.link1name}</a></p>
            <p class="mt3 fw1 f6"><a href="{props.link2url}" class="underline moon-gray">> {props.link2name}</a></p>
</div>
<div class="w-60-ns w-100 fl">
        <p class="mt3  lh-copy fw1">{props.projectShortDesc}</p>

            </div>
</div>
            )