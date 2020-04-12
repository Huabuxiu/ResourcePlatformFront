<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.nid }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="发布时间" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.regTime }}</span>
        </template>
      </el-table-column>
        <el-table-column class-name="status-col" label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button type="primary" @click="onUpdate">修改</el-button>
            <el-button type="primary" @click="onDelete">删除</el-button>
          </template>
        </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/news'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
