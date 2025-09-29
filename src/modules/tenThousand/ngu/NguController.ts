import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngus")
export default class NguController {
  @operation({
    summary: "Get Ngus",
  })
  @get()
  static getNgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngu",
  })
  @post("{id}")
  static createNgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
