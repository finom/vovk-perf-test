import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbcs")
export default class CbcController {
  @operation({
    summary: "Get Cbcs",
  })
  @get()
  static getCbcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbc",
  })
  @post("{id}")
  static createCbc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
