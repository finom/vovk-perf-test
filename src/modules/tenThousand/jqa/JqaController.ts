import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqas")
export default class JqaController {
  @operation({
    summary: "Get Jqas",
  })
  @get()
  static getJqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqa",
  })
  @post("{id}")
  static createJqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
