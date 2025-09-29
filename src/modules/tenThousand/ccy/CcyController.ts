import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccies")
export default class CcyController {
  @operation({
    summary: "Get Ccies",
  })
  @get()
  static getCcies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccy",
  })
  @post("{id}")
  static createCcy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
