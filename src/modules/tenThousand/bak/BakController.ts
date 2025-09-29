import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baks")
export default class BakController {
  @operation({
    summary: "Get Baks",
  })
  @get()
  static getBaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bak",
  })
  @post("{id}")
  static createBak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
