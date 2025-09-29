import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfas")
export default class JfaController {
  @operation({
    summary: "Get Jfas",
  })
  @get()
  static getJfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfa",
  })
  @post("{id}")
  static createJfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
