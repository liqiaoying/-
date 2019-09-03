<template>
  <div class="createPost-container">
    <!--  -->
    <el-form ref="postForm" :model="postForma"  :rules="rules" class="form-container">
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">发布</el-button>
        <el-form-item prop="content" style="margin-bottom: 30px;">
          <Tinymce ref="editor" v-model="postForma.content" :height="300" />
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import Upload from '@/components/Upload/singleImage3'
import { mapState } from "vuex";
// const defaultForm = {
//   content: '', // 文章内容
// }

export default {
  name: 'ArticleDetail',
  components: { Tinymce, Upload },
  computed: {
    ...mapState({
    }),
    postForma:{
      get(){
        return this.$store.state.lc_detail.postForma;
      },
      set(itme){
        return itme
      }
     
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message.warning({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    const validateSourceUri = (rule, value, callback) => {
      if (value) {
        if (validURL(value)) {
          callback()
        } else {
          this.$message.warning({
            message: '外链url填写不正确',
            type: 'error'
          })
          callback(new Error('外链url填写不正确'))
        }
      } else {
        callback()
      }
    }
    return {
      // postForm: Object.assign({}, defaultForm),
      loading: false,
      rules: {
        content: [{ validator: validateRequire }]
      }
    }
  },

  methods: {
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$notify({
            title: '成功',
            message: '发布文章成功',
            type: 'success',
            duration: 2000
          })
        //  this.postForm.status = 'published'
          this.loading = false
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.createPost-container {
  width: 100% !important;
  margin:0px auto;
  position: relative;
  .createPost-main-container {
    padding: 40px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
}
</style>
