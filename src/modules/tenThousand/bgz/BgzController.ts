import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgzs")
export default class BgzController {
  @operation({
    summary: "Get Bgzs",
  })
  @get()
  static getBgzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgz",
  })
  @post("{id}")
  static createBgz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
