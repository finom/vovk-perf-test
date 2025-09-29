import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fges")
export default class FgeController {
  @operation({
    summary: "Get Fges",
  })
  @get()
  static getFges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fge",
  })
  @post("{id}")
  static createFge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
