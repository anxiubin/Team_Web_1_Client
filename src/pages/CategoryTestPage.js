import React from 'react'
import Grid from '@material-ui/core/Grid'
import CategoryAppBar from '../components/CategoryAppBar'
import CategoryDrawer from '../components/CategoryDrawer'
import CategoryCard from '../components/CategoryCard'
import './Category.scss'


export default function CategoryPage(props) {

  const {
    getCategories,
    getFavoriteCategories,
    getCategoryUrlInfoList,
  } = props

  console.log('categoryPage', getCategories, getFavoriteCategories, getCategoryUrlInfoList)

  return (
    <CategoryDrawer
      appBar={<CategoryAppBar>helllo</CategoryAppBar>}
      categories={getCategories}
      favoriteCategories={getFavoriteCategories}
    >
      <Grid container spacing={2}>
        {getCategoryUrlInfoList.map(urlObj => 
          <Grid item xs={2}>
            <CategoryCard urlInfoList={urlObj} />
          </Grid>
        )}
      </Grid>
    </CategoryDrawer>
  )
} 



