import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwcs")
export default class FwcController {
  @operation({
    summary: "Get Fwcs",
  })
  @get()
  static getFwcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwc",
  })
  @post("{id}")
  static createFwc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
