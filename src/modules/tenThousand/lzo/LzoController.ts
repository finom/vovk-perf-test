import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzos")
export default class LzoController {
  @operation({
    summary: "Get Lzos",
  })
  @get()
  static getLzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzo",
  })
  @post("{id}")
  static createLzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
