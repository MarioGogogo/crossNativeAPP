<script>
export default {
  onLaunch() {
    const x5Local = uni.requireNativePlugin("X5LocalInstallModule");
    x5Local.checkX5Installed((res) => {
      if (!res.installed) {
        x5Local.installX5Core({}, (r) => {
          if (r.success && r.needRestart) {
            uni.showModal({
              title: "提示",
              content: "X5内核安装成功，是否立即重启应用？",
              confirmText: "立即重启",
              cancelText: "稍后重启",
              success: (res) => {
                if (res.confirm) {
                  x5Local.restartApp(() => {});
                }
              },
            });
          }
        });
      }
    });
  },

  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
