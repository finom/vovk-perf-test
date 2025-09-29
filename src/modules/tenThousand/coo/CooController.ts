import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coos")
export default class CooController {
  @operation({
    summary: "Get Coos",
  })
  @get()
  static getCoos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coo",
  })
  @post("{id}")
  static createCoo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
