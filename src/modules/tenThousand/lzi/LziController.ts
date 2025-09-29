import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzis")
export default class LziController {
  @operation({
    summary: "Get Lzis",
  })
  @get()
  static getLzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzi",
  })
  @post("{id}")
  static createLzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
