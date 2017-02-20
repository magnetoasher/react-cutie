import { PropTypes } from 'react';

import './sass/app.scss';


const StyleGuideRenderer = ({ title, components, toc, sidebar }) => (

        <div className="kawaii-styleguide">
            <main className="main">

                {sidebar &&
                    <nav className="main__nav">
                        <h3 className="h3">React Kawaii</h3>
                        {toc}
                    </nav>
                }
                <div className="main__content page--triangle">

                    {components}

                </div>
            </main>

            <footer className="footer">
                <p>Generated with <a href="https://github.com/styleguidist/react-styleguidist">React Styleguidist</a></p>
            </footer>
        </div>


);

StyleGuideRenderer.propTypes = {
    title: PropTypes.string.isRequired,
    components: PropTypes.object.isRequired,
    toc: PropTypes.node.isRequired,
    sidebar: PropTypes.bool,
};

export default StyleGuideRenderer;
