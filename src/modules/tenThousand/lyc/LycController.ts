import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lycs")
export default class LycController {
  @operation({
    summary: "Get Lycs",
  })
  @get()
  static getLycs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyc",
  })
  @post("{id}")
  static createLyc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
