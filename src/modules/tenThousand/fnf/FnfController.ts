import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnfs")
export default class FnfController {
  @operation({
    summary: "Get Fnfs",
  })
  @get()
  static getFnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnf",
  })
  @post("{id}")
  static createFnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
