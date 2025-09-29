import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyys")
export default class HyyController {
  @operation({
    summary: "Get Hyys",
  })
  @get()
  static getHyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyy",
  })
  @post("{id}")
  static createHyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
