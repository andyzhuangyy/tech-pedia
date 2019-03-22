window.ATL_JQ_PAGE_PROPS =    {  
	"triggerFunction": function(showCollectorDialog) {
		jQuery("#openJiraForm").click(function(e) {      
			e.preventDefault();      
			showCollectorDialog();    
		});  
	}
};
