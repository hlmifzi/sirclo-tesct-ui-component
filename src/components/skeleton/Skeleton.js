import React from 'react'
import '../../scss/skeleton/placeholder-loading.scss'

const Interfaces = {
}

const defaultProps = {
};

export const Skeleton = () => {
    return (
        <div className="ph-item" >
            <div className="ph-col-12">
                <div className="ph-picture" style={{ height: '500px' }}></div>
                <div className="ph-row">
                    <div className="ph-col-6 big"></div>
                    <div className="ph-col-4 empty big h-64"></div>
                    <div className="ph-col-2 big"></div>
                    <div className="ph-col-4"></div>
                    <div className="ph-col-8 empty"></div>
                    <div className="ph-col-6"></div>
                    <div className="ph-col-6 empty"></div>
                    <div className="ph-col-12"></div>
                </div>
            </div>
        </div>
    )
}

Skeleton.propTypes = Interfaces
Skeleton.defaultProps = defaultProps

