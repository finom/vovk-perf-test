import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apks")
export default class ApkController {
  @operation({
    summary: "Get Apks",
  })
  @get()
  static getApks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apk",
  })
  @post("{id}")
  static createApk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
