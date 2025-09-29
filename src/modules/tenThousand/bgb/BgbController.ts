import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgbs")
export default class BgbController {
  @operation({
    summary: "Get Bgbs",
  })
  @get()
  static getBgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgb",
  })
  @post("{id}")
  static createBgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
