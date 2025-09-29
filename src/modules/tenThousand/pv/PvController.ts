import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pvs")
export default class PvController {
  @operation({
    summary: "Get Pvs",
  })
  @get()
  static getPvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pv",
  })
  @post("{id}")
  static createPv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
