import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sfs")
export default class SfController {
  @operation({
    summary: "Get Sfs",
  })
  @get()
  static getSfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sf",
  })
  @post("{id}")
  static createSf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
