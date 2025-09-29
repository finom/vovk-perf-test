import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgms")
export default class BgmController {
  @operation({
    summary: "Get Bgms",
  })
  @get()
  static getBgms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgm",
  })
  @post("{id}")
  static createBgm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
