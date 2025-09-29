import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgrs")
export default class BgrController {
  @operation({
    summary: "Get Bgrs",
  })
  @get()
  static getBgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgr",
  })
  @post("{id}")
  static createBgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
