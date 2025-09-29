import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccvs")
export default class CcvController {
  @operation({
    summary: "Get Ccvs",
  })
  @get()
  static getCcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccv",
  })
  @post("{id}")
  static createCcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
