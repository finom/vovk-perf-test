import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eois")
export default class EoiController {
  @operation({
    summary: "Get Eois",
  })
  @get()
  static getEois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoi",
  })
  @post("{id}")
  static createEoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
