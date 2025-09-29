import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bds")
export default class BdController {
  @operation({
    summary: "Get Bds",
  })
  @get()
  static getBds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bd",
  })
  @post("{id}")
  static createBd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
