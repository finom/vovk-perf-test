import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgts")
export default class BgtController {
  @operation({
    summary: "Get Bgts",
  })
  @get()
  static getBgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgt",
  })
  @post("{id}")
  static createBgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
