import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bches")
export default class BchController {
  @operation({
    summary: "Get Bches",
  })
  @get()
  static getBches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bch",
  })
  @post("{id}")
  static createBch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
