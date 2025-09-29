import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebos")
export default class EboController {
  @operation({
    summary: "Get Ebos",
  })
  @get()
  static getEbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebo",
  })
  @post("{id}")
  static createEbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
