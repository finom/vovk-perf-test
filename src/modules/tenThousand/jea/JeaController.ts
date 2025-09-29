import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeas")
export default class JeaController {
  @operation({
    summary: "Get Jeas",
  })
  @get()
  static getJeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jea",
  })
  @post("{id}")
  static createJea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
