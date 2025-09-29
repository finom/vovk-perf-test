import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkts")
export default class LktController {
  @operation({
    summary: "Get Lkts",
  })
  @get()
  static getLkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkt",
  })
  @post("{id}")
  static createLkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
