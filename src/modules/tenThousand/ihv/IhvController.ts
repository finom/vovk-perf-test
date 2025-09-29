import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihvs")
export default class IhvController {
  @operation({
    summary: "Get Ihvs",
  })
  @get()
  static getIhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ihv",
  })
  @post("{id}")
  static createIhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
