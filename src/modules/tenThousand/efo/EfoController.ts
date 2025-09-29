import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efos")
export default class EfoController {
  @operation({
    summary: "Get Efos",
  })
  @get()
  static getEfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efo",
  })
  @post("{id}")
  static createEfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
