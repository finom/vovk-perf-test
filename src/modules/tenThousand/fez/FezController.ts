import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fezs")
export default class FezController {
  @operation({
    summary: "Get Fezs",
  })
  @get()
  static getFezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fez",
  })
  @post("{id}")
  static createFez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
