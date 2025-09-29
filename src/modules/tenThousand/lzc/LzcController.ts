import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzcs")
export default class LzcController {
  @operation({
    summary: "Get Lzcs",
  })
  @get()
  static getLzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzc",
  })
  @post("{id}")
  static createLzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
