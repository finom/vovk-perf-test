import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndxes")
export default class NdxController {
  @operation({
    summary: "Get Ndxes",
  })
  @get()
  static getNdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndx",
  })
  @post("{id}")
  static createNdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
