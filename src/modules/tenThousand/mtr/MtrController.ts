import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtrs")
export default class MtrController {
  @operation({
    summary: "Get Mtrs",
  })
  @get()
  static getMtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtr",
  })
  @post("{id}")
  static createMtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
