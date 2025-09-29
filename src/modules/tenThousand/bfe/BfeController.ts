import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfes")
export default class BfeController {
  @operation({
    summary: "Get Bfes",
  })
  @get()
  static getBfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfe",
  })
  @post("{id}")
  static createBfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
