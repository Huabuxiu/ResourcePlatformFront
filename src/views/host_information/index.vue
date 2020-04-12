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
      <el-table-column align="center" label="id" width="95">
        <template slot-scope="scope">
          {{ scope.row.hiid }}
        </template>
      </el-table-column>

      <el-table-column label="主机名" width="200">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>

      <el-table-column label="资源类型" width="220" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.rtid }}</span>
        </template>
      </el-table-column>

      <el-table-column label="访问地址" width="250" align="center">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="端口" width="230" align="center">
        <template slot-scope="scope">
         {{ scope.row.port }}
        </template>
      </el-table-column>


      <el-table-column class-name="status-col" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="onUpdate">修改</el-button>
          <el-button type="primary" @click="onDelete">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/host_information'

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
