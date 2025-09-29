import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccfs")
export default class CcfController {
  @operation({
    summary: "Get Ccfs",
  })
  @get()
  static getCcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccf",
  })
  @post("{id}")
  static createCcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
