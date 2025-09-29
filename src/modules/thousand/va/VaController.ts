import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vas")
export default class VaController {
  @operation({
    summary: "Get Vas",
  })
  @get()
  static getVas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Va",
  })
  @post("{id}")
  static createVa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
