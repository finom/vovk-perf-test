import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czns")
export default class CznController {
  @operation({
    summary: "Get Czns",
  })
  @get()
  static getCzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czn",
  })
  @post("{id}")
  static createCzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
