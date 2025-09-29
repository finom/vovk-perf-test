import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amgs")
export default class AmgController {
  @operation({
    summary: "Get Amgs",
  })
  @get()
  static getAmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amg",
  })
  @post("{id}")
  static createAmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
