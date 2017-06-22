/**
 * Created by eduardo on 22/06/17.
 */

import React, { Component } from 'react';

class Content extends Component {

    render() {

        const { body } = this.props;

        return (
            <div>
                { body }
            </div>
        );
    }

}

export default Content;