import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bas")
export default class BasController {
  @operation({
    summary: "Get Bas",
  })
  @get()
  static getBas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bas",
  })
  @post("{id}")
  static createBas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
