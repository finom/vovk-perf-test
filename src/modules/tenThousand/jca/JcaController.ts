import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jcas")
export default class JcaController {
  @operation({
    summary: "Get Jcas",
  })
  @get()
  static getJcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jca",
  })
  @post("{id}")
  static createJca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
