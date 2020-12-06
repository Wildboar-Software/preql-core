# Ideas for the Future

Kubernetes implementation:

```yaml
PreQLApplication:
  source:
    location:
      url: https://...
  preqlSelector:
    matchLabels:
      app: countries
  serviceSelector:
    matchLabels:
      app: countries-database
  ddl: postgres
```
