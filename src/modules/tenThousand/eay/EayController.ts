import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eays")
export default class EayController {
  @operation({
    summary: "Get Eays",
  })
  @get()
  static getEays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eay",
  })
  @post("{id}")
  static createEay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
