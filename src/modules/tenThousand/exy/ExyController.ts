import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exies")
export default class ExyController {
  @operation({
    summary: "Get Exies",
  })
  @get()
  static getExies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exy",
  })
  @post("{id}")
  static createExy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
