import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgos")
export default class DgoController {
  @operation({
    summary: "Get Dgos",
  })
  @get()
  static getDgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgo",
  })
  @post("{id}")
  static createDgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
