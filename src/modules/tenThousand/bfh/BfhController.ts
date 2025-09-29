import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfhs")
export default class BfhController {
  @operation({
    summary: "Get Bfhs",
  })
  @get()
  static getBfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfh",
  })
  @post("{id}")
  static createBfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
