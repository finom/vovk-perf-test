import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nids")
export default class NidController {
  @operation({
    summary: "Get Nids",
  })
  @get()
  static getNids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nid",
  })
  @post("{id}")
  static createNid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
