import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eocs")
export default class EocController {
  @operation({
    summary: "Get Eocs",
  })
  @get()
  static getEocs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoc",
  })
  @post("{id}")
  static createEoc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
