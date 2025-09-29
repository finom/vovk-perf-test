import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwqs")
export default class FwqController {
  @operation({
    summary: "Get Fwqs",
  })
  @get()
  static getFwqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwq",
  })
  @post("{id}")
  static createFwq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
