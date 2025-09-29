import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iqos")
export default class IqoController {
  @operation({
    summary: "Get Iqos",
  })
  @get()
  static getIqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iqo",
  })
  @post("{id}")
  static createIqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
