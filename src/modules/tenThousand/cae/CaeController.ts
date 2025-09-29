import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caes")
export default class CaeController {
  @operation({
    summary: "Get Caes",
  })
  @get()
  static getCaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cae",
  })
  @post("{id}")
  static createCae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
