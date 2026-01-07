import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apk")
export default class ApkController {
  @operation({
    summary: "Get Apk",
  })
  @get()
  static getApk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apk",
  })
  @post("{id}")
  static createApk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
