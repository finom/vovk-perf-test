import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgs")
export default class BgController {
  @operation({
    summary: "Get Bgs",
  })
  @get()
  static getBgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bg",
  })
  @post("{id}")
  static createBg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
