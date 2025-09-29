import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkrs")
export default class NkrController {
  @operation({
    summary: "Get Nkrs",
  })
  @get()
  static getNkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkr",
  })
  @post("{id}")
  static createNkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
