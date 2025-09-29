import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwzs")
export default class FwzController {
  @operation({
    summary: "Get Fwzs",
  })
  @get()
  static getFwzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwz",
  })
  @post("{id}")
  static createFwz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
