import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bges")
export default class BgeController {
  @operation({
    summary: "Get Bges",
  })
  @get()
  static getBges = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bge",
  })
  @post("{id}")
  static createBge = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
