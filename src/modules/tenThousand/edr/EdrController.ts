import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edrs")
export default class EdrController {
  @operation({
    summary: "Get Edrs",
  })
  @get()
  static getEdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edr",
  })
  @post("{id}")
  static createEdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
