import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmvs")
export default class CmvController {
  @operation({
    summary: "Get Cmvs",
  })
  @get()
  static getCmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmv",
  })
  @post("{id}")
  static createCmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
