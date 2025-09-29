import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwts")
export default class FwtController {
  @operation({
    summary: "Get Fwts",
  })
  @get()
  static getFwts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwt",
  })
  @post("{id}")
  static createFwt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
