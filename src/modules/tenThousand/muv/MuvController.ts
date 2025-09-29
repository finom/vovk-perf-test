import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muvs")
export default class MuvController {
  @operation({
    summary: "Get Muvs",
  })
  @get()
  static getMuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muv",
  })
  @post("{id}")
  static createMuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
