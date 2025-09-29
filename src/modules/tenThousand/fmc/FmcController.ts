import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmcs")
export default class FmcController {
  @operation({
    summary: "Get Fmcs",
  })
  @get()
  static getFmcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmc",
  })
  @post("{id}")
  static createFmc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
