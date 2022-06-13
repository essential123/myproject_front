<template>
    <div class="Banner">
        <el-carousel indicator-position="outside" height="400px">
          <el-carousel-item v-for="item in banner_list" :key="item">
              <img :src="item.image" alt="">
<!--            <el-carousel-item v-for="item in banner_list" :key="item.image">-->
<!--                <img src="../assets/img/banner1.png" alt="">-->
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
   export default {
        name: "Banner",
        data() {
            return {
                banner_list:[]
            }
        },
        created() {
            this.$axios.get(this.$settings.base_url + 'home/banner/').then(res => {
                console.log(res.data)
                this.banner_list=res.data
            })
            // this.$axios.get(this.$settings.base_url + 'home/test/').then(res => {
            //   console.log(res.data)
            //   this.banner_list=res.data
            // })


            // })
          // $.ajax({
          //       url:this.$settings.base_url + 'home/test/',
          //       type:'post',
          //       contentTyoe:'appliation/json',
          //       success:(data)=>{
          //         console.log(data)
          //       }
          // })
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__item {
        height: 400px;
        min-width: 1200px;
    }

    .el-carousel__item img {
        height: 400px;
        margin-left: calc(50% - 1920px / 2);
    }
</style>