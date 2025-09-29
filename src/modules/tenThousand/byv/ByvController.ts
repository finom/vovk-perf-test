import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byvs")
export default class ByvController {
  @operation({
    summary: "Get Byvs",
  })
  @get()
  static getByvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byv",
  })
  @post("{id}")
  static createByv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
