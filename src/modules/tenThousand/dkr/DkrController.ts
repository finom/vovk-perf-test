import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkrs")
export default class DkrController {
  @operation({
    summary: "Get Dkrs",
  })
  @get()
  static getDkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkr",
  })
  @post("{id}")
  static createDkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
