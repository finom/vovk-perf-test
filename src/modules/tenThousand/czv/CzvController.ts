import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czvs")
export default class CzvController {
  @operation({
    summary: "Get Czvs",
  })
  @get()
  static getCzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czv",
  })
  @post("{id}")
  static createCzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
