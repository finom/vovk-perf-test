import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnrs")
export default class BnrController {
  @operation({
    summary: "Get Bnrs",
  })
  @get()
  static getBnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnr",
  })
  @post("{id}")
  static createBnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
