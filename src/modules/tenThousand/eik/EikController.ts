import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eiks")
export default class EikController {
  @operation({
    summary: "Get Eiks",
  })
  @get()
  static getEiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eik",
  })
  @post("{id}")
  static createEik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
