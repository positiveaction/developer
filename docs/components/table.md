---
id: table
title: Table Component
---
![img](../../static/img/components/table.png)
### Simple table component
```json
{
	"type": "table",
	"content": "",
	"classes": [{
			"name": "table-component",
			"label": "table-component",
			"type": 1
		},
		{
			"name": "pa-table",
			"label": "pa-table",
			"type": 1
		}
	],
	"attributes": {
		"data-table": 1,
		"id": "ilv5g"
	},
	"components": [{
		"type": "tbody",
		"content": "",
		"classes": [{
				"name": "table-body",
				"label": "table-body",
				"type": 1
			}
		],
		"attributes": {
			"data-tbody": 1,
		},
		"columns": 2,
		"rows": 2,
		"components": [{
				"type": "row",
				"content": "",
				"classes": [{
						"name": "row",
						"label": "row",
						"type": 1
					}
				],
				"attributes": {},
				"components": [{
						"type": "cell",
						"content": "",
						"classes": [{
								"name": "cell",
								"label": "cell",
								"type": 1
							}
						],
						"attributes": {}
					},
					{
						"type": "cell",
						"content": "",
						"classes": [{
								"name": "cell",
								"label": "cell",
								"type": 1
							}
						],
						"attributes": {}
					}
				]
			},
			{
				"type": "row",
				"content": "",
				"classes": [{
						"name": "row",
						"label": "row",
						"type": 1
					}
				],
				"attributes": {},
				"components": [{
						"type": "cell",
						"content": "",
						"classes": [{
								"name": "cell",
								"label": "cell",
								"type": 1
							}
						],
						"attributes": {}
					},
					{
						"type": "cell",
						"content": "",
						"classes": [{
								"name": "cell",
								"label": "cell",
								"type": 1
							}
						],
						"attributes": {}
					}
				]
			}
		]
	}]
}
```

### Table component with text
```json
{
	"type": "table",
	"classes": [{
		"name": "pa-table",
		"type": 1,
		"label": "pa-table"
	}],
	"content": "",
	"tagName": "table",
	"components": [{
		"type": "thead",
		"classes": [{
			"name": "pa-tableheader",
			"type": 1,
			"label": "pa-tableheader"
		}],
		"content": "",
		"tagName": "thead",
		"components": [{
			"type": "row",
			"tagName": "tr",
			"attributes": {},
			"components": [{
				"type": "cell",
				"tagName": "th",
				"attributes": {},
				"components": [{
					"name": "Heading6",
					"type": "text",
					"classes": [{
						"name": "pa-boldtext",
						"type": 1,
						"label": "pa-boldtext"
					}],
					"content": "Teacher",
					"tagName": "h6",
					"components": []
				}]
			}, {
				"type": "cell",
				"tagName": "th",
				"attributes": {},
				"components": [{
					"name": "Heading6",
					"type": "text",
					"classes": [{
						"name": "pa-boldtext",
						"type": 1,
						"label": "pa-boldtext"
					}],
					"content": "Children",
					"tagName": "h6",
					"components": []
				}]
			}]
		}]
	}, {
		"type": "tbody",
		"classes": [{
			"name": "pa-tablerows",
			"type": 1,
			"label": "pa-tablerows"
		}],
		"content": "",
		"tagName": "tbody",
		"components": [{
			"type": "row",
			"classes": [{
				"name": "pa-tablerow",
				"type": 1,
				"label": "pa-tablerow"
			}],
			"content": "",
			"tagName": "tr",
			"components": [{
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "The secret to becoming a very fast runner…",
					"components": []
				}]
			}, {
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "By running!",
					"components": []
				}]
			}]
		}, {
			"type": "row",
			"classes": [{
				"name": "pa-tablerow",
				"type": 1,
				"label": "pa-tablerow"
			}],
			"content": "",
			"tagName": "tr",
			"components": [{
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "The secret to becoming a very good painter…",
					"components": []
				}]
			}, {
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "By painting!",
					"components": []
				}]
			}]
		}, {
			"type": "row",
			"classes": [{
				"name": "pa-tablerow",
				"type": 1,
				"label": "pa-tablerow"
			}],
			"content": "",
			"tagName": "tr",
			"components": [{
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "The secret to becoming a very good singer…",
					"components": []
				}]
			}, {
				"type": "cell",
				"classes": [{
					"name": "pa-text",
					"type": 1,
					"label": "pa-text"
				}],
				"tagName": "td",
				"attributes": {},
				"components": [{
					"type": "text",
					"classes": [{
						"name": "pa-text",
						"type": 1,
						"label": "pa-text"
					}],
					"content": "By singing!",
					"components": []
				}]
			}]
		}]
	}]
}
```
