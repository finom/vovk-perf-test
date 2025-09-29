import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgcs")
export default class LgcController {
  @operation({
    summary: "Get Lgcs",
  })
  @get()
  static getLgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgc",
  })
  @post("{id}")
  static createLgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
