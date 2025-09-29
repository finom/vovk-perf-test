import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zos")
export default class ZoController {
  @operation({
    summary: "Get Zos",
  })
  @get()
  static getZos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zo",
  })
  @post("{id}")
  static createZo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
