import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbrs")
export default class CbrController {
  @operation({
    summary: "Get Cbrs",
  })
  @get()
  static getCbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbr",
  })
  @post("{id}")
  static createCbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
