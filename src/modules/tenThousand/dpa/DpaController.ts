import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpas")
export default class DpaController {
  @operation({
    summary: "Get Dpas",
  })
  @get()
  static getDpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpa",
  })
  @post("{id}")
  static createDpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
