import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsfs")
export default class LsfController {
  @operation({
    summary: "Get Lsfs",
  })
  @get()
  static getLsfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsf",
  })
  @post("{id}")
  static createLsf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
