import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncies")
export default class NcyController {
  @operation({
    summary: "Get Ncies",
  })
  @get()
  static getNcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncy",
  })
  @post("{id}")
  static createNcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
