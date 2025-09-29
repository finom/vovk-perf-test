import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eixes")
export default class EixController {
  @operation({
    summary: "Get Eixes",
  })
  @get()
  static getEixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eix",
  })
  @post("{id}")
  static createEix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
