import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csms")
export default class CsmController {
  @operation({
    summary: "Get Csms",
  })
  @get()
  static getCsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csm",
  })
  @post("{id}")
  static createCsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
