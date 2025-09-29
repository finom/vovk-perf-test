import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nas")
export default class NasController {
  @operation({
    summary: "Get Nas",
  })
  @get()
  static getNas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nas",
  })
  @post("{id}")
  static createNas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
