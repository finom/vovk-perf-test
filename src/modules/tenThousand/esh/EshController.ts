import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eshes")
export default class EshController {
  @operation({
    summary: "Get Eshes",
  })
  @get()
  static getEshes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esh",
  })
  @post("{id}")
  static createEsh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
