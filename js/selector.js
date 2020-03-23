var selector = {
	Page: function(pageId) {
		return document.querySelector(`#page-${pageId}`);
	},

	Row: function(pageId, RowId) {
		return document.querySelector(`#page-${pageId}-row-${RowId}`);
	},

	item: function(pageId, RowId, itemId) {
		return document.querySelector(`#page-${pageId}-row-${RowId}-btn-${itemId}`) ||
			   document.querySelector(`#page-${pageId}-row-${RowId}-card-${itemId}`)
	}
}