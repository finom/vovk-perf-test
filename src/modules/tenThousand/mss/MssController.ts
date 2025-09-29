import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msses")
export default class MssController {
  @operation({
    summary: "Get Msses",
  })
  @get()
  static getMsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mss",
  })
  @post("{id}")
  static createMss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
