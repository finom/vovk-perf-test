import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("brgs")
export default class BrgController {
  @operation({
    summary: "Get Brgs",
  })
  @get()
  static getBrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Brg",
  })
  @post("{id}")
  static createBrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
