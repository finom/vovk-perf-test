import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nies")
export default class NyController {
  @operation({
    summary: "Get Nies",
  })
  @get()
  static getNies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ny",
  })
  @post("{id}")
  static createNy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
