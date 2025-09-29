import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cegs")
export default class CegController {
  @operation({
    summary: "Get Cegs",
  })
  @get()
  static getCegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ceg",
  })
  @post("{id}")
  static createCeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
