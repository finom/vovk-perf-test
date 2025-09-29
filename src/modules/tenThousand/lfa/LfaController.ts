import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfas")
export default class LfaController {
  @operation({
    summary: "Get Lfas",
  })
  @get()
  static getLfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfa",
  })
  @post("{id}")
  static createLfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
