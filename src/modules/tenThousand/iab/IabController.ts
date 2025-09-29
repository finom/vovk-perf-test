import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iabs")
export default class IabController {
  @operation({
    summary: "Get Iabs",
  })
  @get()
  static getIabs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iab",
  })
  @post("{id}")
  static createIab = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
