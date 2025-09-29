import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaos")
export default class JaoController {
  @operation({
    summary: "Get Jaos",
  })
  @get()
  static getJaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jao",
  })
  @post("{id}")
  static createJao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
