import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amts")
export default class AmtController {
  @operation({
    summary: "Get Amts",
  })
  @get()
  static getAmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amt",
  })
  @post("{id}")
  static createAmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
