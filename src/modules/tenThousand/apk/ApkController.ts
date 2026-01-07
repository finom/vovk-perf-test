import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apk")
export default class ApkController {
  @operation({
    summary: "Get Apk",
  })
  @get()
  static getApk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apk",
  })
  @post("{id}")
  static createApk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
