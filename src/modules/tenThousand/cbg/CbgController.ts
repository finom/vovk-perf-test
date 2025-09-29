import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbgs")
export default class CbgController {
  @operation({
    summary: "Get Cbgs",
  })
  @get()
  static getCbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbg",
  })
  @post("{id}")
  static createCbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
