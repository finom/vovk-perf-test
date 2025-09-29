import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fces")
export default class FceController {
  @operation({
    summary: "Get Fces",
  })
  @get()
  static getFces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fce",
  })
  @post("{id}")
  static createFce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
