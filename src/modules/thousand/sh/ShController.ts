import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("shes")
export default class ShController {
  @operation({
    summary: "Get Shes",
  })
  @get()
  static getShes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sh",
  })
  @post("{id}")
  static createSh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
