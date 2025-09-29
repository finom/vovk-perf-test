import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvis")
export default class CviController {
  @operation({
    summary: "Get Cvis",
  })
  @get()
  static getCvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvi",
  })
  @post("{id}")
  static createCvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
