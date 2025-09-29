import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgks")
export default class BgkController {
  @operation({
    summary: "Get Bgks",
  })
  @get()
  static getBgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgk",
  })
  @post("{id}")
  static createBgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
