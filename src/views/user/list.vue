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
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="信息" >
        <template slot-scope="scope">
          {{ scope.row.name}}
          {{scope.row.eMail}}
        </template>
      </el-table-column>
      <el-table-column label="部门" width="300" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.department }}</span>
        </template>
      </el-table-column>
      <el-table-column label="注册时间" width="300" align="center">
        <template slot-scope="scope">
          {{ scope.row.regTime }}
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="onPass">通过</el-button>
          <el-button type="primary" @click="OnRefuse">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getexamine_list } from '@/api/user'

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
      getexamine_list().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
