import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpls")
export default class MplController {
  @operation({
    summary: "Get Mpls",
  })
  @get()
  static getMpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpl",
  })
  @post("{id}")
  static createMpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
