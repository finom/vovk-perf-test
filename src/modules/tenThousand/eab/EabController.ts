import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eabs")
export default class EabController {
  @operation({
    summary: "Get Eabs",
  })
  @get()
  static getEabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eab",
  })
  @post("{id}")
  static createEab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
