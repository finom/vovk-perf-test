import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyks")
export default class LykController {
  @operation({
    summary: "Get Lyks",
  })
  @get()
  static getLyks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyk",
  })
  @post("{id}")
  static createLyk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
