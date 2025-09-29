import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgjs")
export default class BgjController {
  @operation({
    summary: "Get Bgjs",
  })
  @get()
  static getBgjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgj",
  })
  @post("{id}")
  static createBgj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
