import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iszs")
export default class IszController {
  @operation({
    summary: "Get Iszs",
  })
  @get()
  static getIszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isz",
  })
  @post("{id}")
  static createIsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
