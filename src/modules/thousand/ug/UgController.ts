import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ugs")
export default class UgController {
  @operation({
    summary: "Get Ugs",
  })
  @get()
  static getUgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ug",
  })
  @post("{id}")
  static createUg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
