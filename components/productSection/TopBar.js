import styled from 'styled-components'

const StyledTopBar = styled.div`

.sectionTitle {
    background-color: #004695;
    text-align: center;
    border-radius: 6px 6px 0 0;

    .menuTitle{
      h3{
        color: #e9edf2;
        font-weight: 350;
        letter-spacing: 0.05rem;
        padding: 0.3rem 0;
      }
    }
  }
`

const TopBar = () => {
  return (
    <StyledTopBar>
      <div className='sectionTitle'>
        <div className='menuTitle'>
          <h3>TopBar Title</h3>
        </div>
      </div>
    </StyledTopBar>
  )
};

export default TopBar;