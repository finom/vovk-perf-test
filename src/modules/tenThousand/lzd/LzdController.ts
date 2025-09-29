import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzds")
export default class LzdController {
  @operation({
    summary: "Get Lzds",
  })
  @get()
  static getLzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzd",
  })
  @post("{id}")
  static createLzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
