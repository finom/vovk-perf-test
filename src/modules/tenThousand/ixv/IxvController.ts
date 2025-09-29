import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixvs")
export default class IxvController {
  @operation({
    summary: "Get Ixvs",
  })
  @get()
  static getIxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixv",
  })
  @post("{id}")
  static createIxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
