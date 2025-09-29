import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lns")
export default class LnsController {
  @operation({
    summary: "Get Lns",
  })
  @get()
  static getLns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lns",
  })
  @post("{id}")
  static createLns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
