import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwus")
export default class FwuController {
  @operation({
    summary: "Get Fwus",
  })
  @get()
  static getFwus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwu",
  })
  @post("{id}")
  static createFwu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
