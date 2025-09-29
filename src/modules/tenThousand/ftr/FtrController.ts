import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftrs")
export default class FtrController {
  @operation({
    summary: "Get Ftrs",
  })
  @get()
  static getFtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftr",
  })
  @post("{id}")
  static createFtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
