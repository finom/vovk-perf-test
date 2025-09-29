import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eches")
export default class EchController {
  @operation({
    summary: "Get Eches",
  })
  @get()
  static getEches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ech",
  })
  @post("{id}")
  static createEch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
