import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmfs")
export default class CmfController {
  @operation({
    summary: "Get Cmfs",
  })
  @get()
  static getCmfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmf",
  })
  @post("{id}")
  static createCmf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
