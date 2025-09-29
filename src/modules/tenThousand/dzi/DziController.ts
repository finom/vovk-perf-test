import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzis")
export default class DziController {
  @operation({
    summary: "Get Dzis",
  })
  @get()
  static getDzis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzi",
  })
  @post("{id}")
  static createDzi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
