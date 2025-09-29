import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nocs")
export default class NocController {
  @operation({
    summary: "Get Nocs",
  })
  @get()
  static getNocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noc",
  })
  @post("{id}")
  static createNoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
