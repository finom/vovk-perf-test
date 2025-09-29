import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbns")
export default class CbnController {
  @operation({
    summary: "Get Cbns",
  })
  @get()
  static getCbns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbn",
  })
  @post("{id}")
  static createCbn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
