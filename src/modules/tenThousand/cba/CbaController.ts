import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbas")
export default class CbaController {
  @operation({
    summary: "Get Cbas",
  })
  @get()
  static getCbas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cba",
  })
  @post("{id}")
  static createCba = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
