import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bggs")
export default class BggController {
  @operation({
    summary: "Get Bggs",
  })
  @get()
  static getBggs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgg",
  })
  @post("{id}")
  static createBgg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
