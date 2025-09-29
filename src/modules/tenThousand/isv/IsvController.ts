import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isvs")
export default class IsvController {
  @operation({
    summary: "Get Isvs",
  })
  @get()
  static getIsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isv",
  })
  @post("{id}")
  static createIsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
