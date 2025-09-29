import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbbs")
export default class CbbController {
  @operation({
    summary: "Get Cbbs",
  })
  @get()
  static getCbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbb",
  })
  @post("{id}")
  static createCbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
