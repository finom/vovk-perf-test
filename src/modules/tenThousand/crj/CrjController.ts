import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crjs")
export default class CrjController {
  @operation({
    summary: "Get Crjs",
  })
  @get()
  static getCrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crj",
  })
  @post("{id}")
  static createCrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
