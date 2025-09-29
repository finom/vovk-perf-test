import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncs")
export default class NcsController {
  @operation({
    summary: "Get Ncs",
  })
  @get()
  static getNcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncs",
  })
  @post("{id}")
  static createNcs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
