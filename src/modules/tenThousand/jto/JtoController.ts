import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtos")
export default class JtoController {
  @operation({
    summary: "Get Jtos",
  })
  @get()
  static getJtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jto",
  })
  @post("{id}")
  static createJto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
