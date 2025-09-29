import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmrs")
export default class NmrController {
  @operation({
    summary: "Get Nmrs",
  })
  @get()
  static getNmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmr",
  })
  @post("{id}")
  static createNmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
