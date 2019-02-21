__all__ = [
    "slack",
    "github",
    "aws",
    "jira",
    "circleci",
    "quay",
    "newrelic",
    "pagerduty",
    "salesforce"
]


def next_service(service):
    svc_index = __all__.index(service)
    return __all__[svc_index + 1] if svc_index < len(__all__) - 1 else None
