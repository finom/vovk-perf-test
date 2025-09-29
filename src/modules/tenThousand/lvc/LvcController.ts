import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvcs")
export default class LvcController {
  @operation({
    summary: "Get Lvcs",
  })
  @get()
  static getLvcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvc",
  })
  @post("{id}")
  static createLvc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
