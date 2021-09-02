<template>
  <div>
    <div id="card" class="card ui-card">
      <div class="card-content">
        <figure class="card-image">
          <img src="~/assets/about.jpg" alt="">
        </figure>

        <div class="card-details card-body">
          <div class="card-title">
            Project Name
          </div>
          <div class="card-description">
            Description
          </div>
          <span class="card-label-wrapper">
            <span class="card-label">Platform</span>
            <span class="card-label">Security</span>
          </span>
        </div>
        <div class="card-footer">
          <div class="card-footer-price">
            Vue
          </div>
          <button type="button" class="card-button">
            View Demo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardView'
}
</script>

<style lang="scss">
.card.ui-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  .card-content{
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
    figure {
      margin: 0;
      padding: 0;
      background: #f5f5f7;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        align-self: center;
      }
    }
  }
  .card-details.card-body {
    padding: 20px;
    .card-title {
      font-size: 1.2rem;
      font-weight: 500;
    }
    .card-description {
      line-height: 1.33337;
      font-weight: 400;
      letter-spacing: -.01em;
      margin-top: 5px;
    }
    .card-label-wrapper {
      color: #6e6e73;
      .card-label {
        margin-right: 10px;
        display: inline-flex;
        white-space: nowrap;
        font-size: 0.7rem;
      }
    }
    .card-description+.card-label-wrapper {
      margin-top: 9px;
    }
  }
  .card-footer, .card-header {
    display: flex;
    place-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    background-color: rgba(0,0,0,.03);
    .card-footer-price {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .card-button {
      padding: 10px;
      border-radius: 20px;
    }
  }
}

</style>
