import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrps")
export default class MrpController {
  @operation({
    summary: "Get Mrps",
  })
  @get()
  static getMrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrp",
  })
  @post("{id}")
  static createMrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
