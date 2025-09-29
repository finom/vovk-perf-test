import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndms")
export default class NdmController {
  @operation({
    summary: "Get Ndms",
  })
  @get()
  static getNdms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndm",
  })
  @post("{id}")
  static createNdm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
