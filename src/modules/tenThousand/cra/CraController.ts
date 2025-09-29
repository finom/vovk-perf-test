import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cras")
export default class CraController {
  @operation({
    summary: "Get Cras",
  })
  @get()
  static getCras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cra",
  })
  @post("{id}")
  static createCra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
