import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzus")
export default class LzuController {
  @operation({
    summary: "Get Lzus",
  })
  @get()
  static getLzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzu",
  })
  @post("{id}")
  static createLzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
