import React from 'react'
import '../../scss/skeleton/placeholder-loading.scss'
const Skeleton = () => {
    return (
        <div class="ph-item" >
            <div class="ph-col-12">
                <div class="ph-picture" style={{ height: '500px' }}></div>
                <div class="ph-row">
                    <div class="ph-col-6 big"></div>
                    <div class="ph-col-4 empty big h-64"></div>
                    <div class="ph-col-2 big"></div>
                    <div class="ph-col-4"></div>
                    <div class="ph-col-8 empty"></div>
                    <div class="ph-col-6"></div>
                    <div class="ph-col-6 empty"></div>
                    <div class="ph-col-12"></div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
