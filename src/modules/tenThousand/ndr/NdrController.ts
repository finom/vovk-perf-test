import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndrs")
export default class NdrController {
  @operation({
    summary: "Get Ndrs",
  })
  @get()
  static getNdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndr",
  })
  @post("{id}")
  static createNdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
