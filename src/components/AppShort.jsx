import Button from 'react-bootstrap/Button';

const AppShort = () => {
    return (
        <>
            <div className='short py-2'>
                <div className='container-fluid mx-auto'>
                    <div className='d-flex align-items-center justify-content-center gap-5'>
                        <h3 className='short_head'>Book Your Flu Shot Today!</h3>
                        <Button variant="primary">FIND A PHARMACY</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppShort;