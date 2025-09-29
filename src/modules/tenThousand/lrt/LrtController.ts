import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrts")
export default class LrtController {
  @operation({
    summary: "Get Lrts",
  })
  @get()
  static getLrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrt",
  })
  @post("{id}")
  static createLrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
