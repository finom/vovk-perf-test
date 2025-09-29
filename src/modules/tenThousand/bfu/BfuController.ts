import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfus")
export default class BfuController {
  @operation({
    summary: "Get Bfus",
  })
  @get()
  static getBfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfu",
  })
  @post("{id}")
  static createBfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
