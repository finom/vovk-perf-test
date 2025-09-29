import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jres")
export default class JreController {
  @operation({
    summary: "Get Jres",
  })
  @get()
  static getJres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jre",
  })
  @post("{id}")
  static createJre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
