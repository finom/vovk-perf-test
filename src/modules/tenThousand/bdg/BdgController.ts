import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdgs")
export default class BdgController {
  @operation({
    summary: "Get Bdgs",
  })
  @get()
  static getBdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdg",
  })
  @post("{id}")
  static createBdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
