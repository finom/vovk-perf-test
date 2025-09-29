import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvos")
export default class FvoController {
  @operation({
    summary: "Get Fvos",
  })
  @get()
  static getFvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvo",
  })
  @post("{id}")
  static createFvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
