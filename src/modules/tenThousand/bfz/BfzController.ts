import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfzs")
export default class BfzController {
  @operation({
    summary: "Get Bfzs",
  })
  @get()
  static getBfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfz",
  })
  @post("{id}")
  static createBfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
