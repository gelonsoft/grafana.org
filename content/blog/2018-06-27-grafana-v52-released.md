+++
title = "Grafana v5.2 Released"
author = "mefraimsson"
date = "2018-06-27"
keywords = ["Grafana", "Blog", "v5.2", "Stable", "Release", "Download"]
cover_opacity = "0.4"
cover_blur = "1px"
description = "Grafana 5.2 Stable Release"
categories = ["Release", "Grafana"]
excerpt = "The recent 5.1 release focused on smoothing out the rough edges from the 5.0 release. The major highlights of the Grafana 5.2 release are two much-requested, long-awaited features."
+++

# v5.2 Stable Release

The recent 5.1 release focused on smoothing out the rough edges from the 5.0 release. The major highlights of the Grafana 5.2 release are these two much-requested, long-awaited features:

- **Elasticsearch alerting**
- **Native Grafana builds for ARM**

<a href="https://grafana.com/grafana/download/?utm_source=blog&utm_campaign=v52" target="_blank" class="btn btn--primary">Download Grafana 5.2 Now</a>

## Release Highlights

There are two new major features included, Elasticsearch alerting and native Grafana builds for ARM.

Another highlight is that Grafana's docker container now supports Docker secrets which should make it more secure when providing
sensitive configuration data to Grafana.

We got tons of useful improvement suggestions, bug reports and Pull Requests from our amazing community. Thank you all! See the [full changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) for more details.

- [Elasticsearch alerting]({{< relref "#elasticsearch-alerting" >}}) it's finally here!
- [Native builds for ARM]({{< relref "#native-builds-for-arm" >}}) native builds of Grafana for many more platforms!
- [Improved Docker image]({{< relref "#improved-docker-image" >}}) with support for docker secrets
- [Security]({{< relref "#security" >}}) make your Grafana instance more secure
- [Prometheus]({{< relref "#prometheus" >}}) with alignment enhancements
- [InfluxDB]({{< relref "#influxdb" >}}) now supports the `mode` function
- [Alerting]({{< relref "#discord" >}}) with alert notification channel type for Discord
- [Dashboards & Panels]({{< relref "#dashboards-panels" >}}) with save & import enhancements

## Elasticsearch alerting

{{< docs-imagebox img="/img/docs/v52/elasticsearch_alerting.png" max-width="800px" class="docs-image--right" >}}

Grafana v5.2 ships with an updated Elasticsearch datasource with support for alerting. Alerting support for Elasticsearch has been one of
the most requested features by our community and now it's finally here. Please try it out and let us know what you think.

<div class="clearfix"></div>

## Native builds for ARM

Grafana v5.2 brings an improved build pipeline with cross-platform support. This enables native builds of Grafana for ARMv7 (x32) and ARM64 (x64).
Please try it out and let us know what you think.

We've been longing for native ARM build support for ages. With the help from our amazing community this is now finally available. We would like
to especially thank [fg2it](https://github.com/fg2it) for maintaining the unofficial Grafana ARM builds for the last 2 years and for all his
work on the cross-platform support.

Another great addition with the improved build pipeline is that binaries for MacOS/Darwin (x64) and Windows (x64) are now automatically built and
published for both stable and nightly builds.

## Improved Docker image

The Grafana docker image adds support for Docker secrets which enables you to supply Grafana with configuration through files. More
information in the [Installing using Docker documentation](http://docs.grafana.org/installation/docker/#reading-secrets-from-files-support-for-docker-secrets).

## Security

{{< docs-imagebox img="/img/docs/v52/login_change_password.png" max-width="800px" class="docs-image--right" >}}

Starting from Grafana v5.2, when you login with the administrator account using the default password you'll be presented with a form to change the password.
We hope this encourages users to follow Grafana's best practices and change the default administrator password.

<div class="clearfix"></div>

## Prometheus

The Prometheus datasource now aligns the start/end of the query sent to Prometheus with the step, which ensures PromQL expressions with *rate*
functions get consistent results, and thus avoids graphs jumping around on reload.

## InfluxDB

The InfluxDB datasource now includes support for the *mode* function which returns the most frequent value in a list of field values.

## Discord

By popular demand Grafana now includes support for an alert notification channel type for [Discord](https://discordapp.com/).

## Dashboards & Panels

### Modified time range and variables are no longer saved by default

{{< docs-imagebox img="/img/docs/v52/dashboard_save_modal.png" max-width="800px" class="docs-image--right" >}}

Starting from Grafana v5.2, a modified time range or variable are no longer saved by default. To save a modified
time range or variable, you'll need to actively select that when saving a dashboard, see screenshot.
This should hopefully make it easier to have sane defaults for time and variables in dashboards and make it more explicit
when you actually want to overwrite those settings.

<div class="clearfix"></div>

### Import dashboard enhancements

{{< docs-imagebox img="/img/docs/v52/dashboard_import.png" max-width="800px" class="docs-image--right" >}}

Grafana v5.2 adds support for specifying an existing folder or creating a new one when importing a dashboard - a long-awaited feature since
Grafana v5.0 introduced support for dashboard folders and permissions. The import dashboard page has also got some general improvements
and should now make it more clear if a possible import will overwrite an existing dashboard, or not.

This release also adds some improvements for those users only having editor or admin permissions in certain folders. The links to
*Create Dashboard* and *Import Dashboard* are now available in the side navigation, in dashboard search and on the manage dashboards/folder page for a
user that has editor role in an organization or the edit permission in at least one folder.

<div class="clearfix"></div>

## Changelog

Checkout the [CHANGELOG.md](https://github.com/grafana/grafana/blob/master/CHANGELOG.md) file for a complete list
of new features, changes, and bug fixes.
