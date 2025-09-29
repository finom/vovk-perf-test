import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcds")
export default class BcdController {
  @operation({
    summary: "Get Bcds",
  })
  @get()
  static getBcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bcd",
  })
  @post("{id}")
  static createBcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
