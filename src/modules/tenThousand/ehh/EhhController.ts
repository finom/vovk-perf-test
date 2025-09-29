import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehhs")
export default class EhhController {
  @operation({
    summary: "Get Ehhs",
  })
  @get()
  static getEhhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehh",
  })
  @post("{id}")
  static createEhh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
