import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csgs")
export default class CsgController {
  @operation({
    summary: "Get Csgs",
  })
  @get()
  static getCsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csg",
  })
  @post("{id}")
  static createCsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
