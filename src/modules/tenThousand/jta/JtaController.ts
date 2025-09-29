import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtas")
export default class JtaController {
  @operation({
    summary: "Get Jtas",
  })
  @get()
  static getJtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jta",
  })
  @post("{id}")
  static createJta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
