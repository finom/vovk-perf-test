import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqos")
export default class HqoController {
  @operation({
    summary: "Get Hqos",
  })
  @get()
  static getHqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqo",
  })
  @post("{id}")
  static createHqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
