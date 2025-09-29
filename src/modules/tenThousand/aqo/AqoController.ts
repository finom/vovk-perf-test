import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqos")
export default class AqoController {
  @operation({
    summary: "Get Aqos",
  })
  @get()
  static getAqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqo",
  })
  @post("{id}")
  static createAqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
