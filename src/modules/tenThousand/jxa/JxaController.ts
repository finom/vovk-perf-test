import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxas")
export default class JxaController {
  @operation({
    summary: "Get Jxas",
  })
  @get()
  static getJxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxa",
  })
  @post("{id}")
  static createJxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
