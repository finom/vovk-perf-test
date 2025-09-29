import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bijs")
export default class BijController {
  @operation({
    summary: "Get Bijs",
  })
  @get()
  static getBijs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bij",
  })
  @post("{id}")
  static createBij = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
