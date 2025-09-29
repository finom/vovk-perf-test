import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcks")
export default class BckController {
  @operation({
    summary: "Get Bcks",
  })
  @get()
  static getBcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bck",
  })
  @post("{id}")
  static createBck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
