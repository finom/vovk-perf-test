import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fees")
export default class FeeController {
  @operation({
    summary: "Get Fees",
  })
  @get()
  static getFees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fee",
  })
  @post("{id}")
  static createFee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
