import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzts")
export default class LztController {
  @operation({
    summary: "Get Lzts",
  })
  @get()
  static getLzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzt",
  })
  @post("{id}")
  static createLzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
