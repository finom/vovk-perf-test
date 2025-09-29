import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbes")
export default class BbeController {
  @operation({
    summary: "Get Bbes",
  })
  @get()
  static getBbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbe",
  })
  @post("{id}")
  static createBbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
