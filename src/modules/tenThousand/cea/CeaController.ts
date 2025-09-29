import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceas")
export default class CeaController {
  @operation({
    summary: "Get Ceas",
  })
  @get()
  static getCeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cea",
  })
  @post("{id}")
  static createCea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
