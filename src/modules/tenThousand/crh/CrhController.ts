import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crhs")
export default class CrhController {
  @operation({
    summary: "Get Crhs",
  })
  @get()
  static getCrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crh",
  })
  @post("{id}")
  static createCrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
