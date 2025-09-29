import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndts")
export default class NdtController {
  @operation({
    summary: "Get Ndts",
  })
  @get()
  static getNdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ndt",
  })
  @post("{id}")
  static createNdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
